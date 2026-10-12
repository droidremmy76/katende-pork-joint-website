/* Katende 2026 — lightweight interaction engine, hand-coded by ChatGPT.
   No site-builder runtime or animation framework dependency. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
  const menuButton = $('#menuToggle');
  const menuPanel = $('#mobilePanel');
  const header = $('#header');
  const progress = $('#progress');
  let lastFocus = null;

  function toggleNav(force) {
    const open = typeof force === 'boolean' ? force : menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuPanel.classList.toggle('open', open);
    menuPanel.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('nav-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      lastFocus = document.activeElement;
      const first = $('a', menuPanel);
      if(first) setTimeout(() => first.focus({preventScroll:true}), 80);
    } else if (lastFocus === menuButton) {
      menuButton.focus({preventScroll:true});
    }
  }
  menuButton?.addEventListener('click', () => toggleNav());
  $$('a', menuPanel).forEach(a => a.addEventListener('click', () => toggleNav(false)));
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && menuPanel?.classList.contains('open')) toggleNav(false);
    if(e.key === 'Tab' && menuPanel?.classList.contains('open')) {
      const focusable = $$('a,button',menuPanel).concat(menuButton);
      const atFirst = document.activeElement === focusable[0];
      const atLast = document.activeElement === menuButton;
      if(e.shiftKey && atFirst){e.preventDefault(); menuButton.focus();}
      if(!e.shiftKey && atLast){e.preventDefault();focusable[0].focus();}
    }
  });

  let raf = false;
  const updateScroll = () => {
    const y=window.scrollY || 0;
    const h=document.documentElement.scrollHeight-window.innerHeight;
    if(progress) progress.style.width=(h>0? Math.min(100,y/h*100):0).toFixed(2)+'%';
    header?.classList.toggle('scrolled',y>45);
    raf=false;
  };
  document.addEventListener('scroll',() => {if(!raf){raf=true;requestAnimationFrame(updateScroll)}},{passive:true});
  updateScroll();

  if ('IntersectionObserver' in window && !reduced) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:0.12,rootMargin:'0px 0px -36px 0px'});
    $$('.reveal').forEach(el => observer.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  const menuCategories={
    grill:{image:'./assets/pork-detail.jpg',alt:'Illustrative golden charcoal grilled pork',caption:'01 / GRILL CONCEPT',description:"The smoky, richly browned centrepiece. An idea for how Katende's real menu could shine."},
    sides:{image:'./assets/sides.jpg',alt:'Illustrative cassava wedges and fresh tomato salad',caption:'02 / SIDES CONCEPT',description:'Colour, texture, and something to share. These are styling concepts, not confirmed Katende dishes.'},
    refresh:{image:'./assets/table-mood.jpg',alt:'Illustrative warm outdoor dining atmosphere with refreshments',caption:'03 / REFRESHMENTS CONCEPT',description:'A moment to slow down between bites. Contact the restaurant for its actual drinks selection.'}
  };
  const tabs = $$('[data-menu]');
  const image = $('#menuImage');
  const caption = $('#menuCaption');
  const description = $('#menuDescription');
  const panel = $('#menuDetail');
  let menuTimer=0;
  function selectTab(next, focus) {
    const button = tabs.find(x=>x.dataset.menu===next);
    const data = menuCategories[next];
    if(!button||!data||!image)return;
    tabs.forEach(x=>{
      const selected=x===button;
      x.setAttribute('aria-selected',String(selected));
      x.tabIndex=selected?0:-1;
    });
    if(panel)panel.setAttribute('aria-labelledby',button.id);
    if(focus)button.focus();
    clearTimeout(menuTimer);
    image.classList.add('changing');
    menuTimer=window.setTimeout(()=>{
      image.src=data.image; image.alt=data.alt;
      if(caption)caption.textContent=data.caption;
      if(description)description.textContent=data.description;
      image.onload=()=>image.classList.remove('changing');
      if(image.complete)image.classList.remove('changing');
    }, reduced?0:180);
  }
  tabs.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>selectTab(btn.dataset.menu,false));
    btn.addEventListener('keydown',e=>{
      let i=null;
      if(['ArrowRight','ArrowDown'].includes(e.key)) i=(idx+1)%tabs.length;
      if(['ArrowLeft','ArrowUp'].includes(e.key)) i=(idx-1+tabs.length)%tabs.length;
      if(e.key==='Home')i=0;
      if(e.key==='End')i=tabs.length-1;
      if(i!==null){e.preventDefault();selectTab(tabs[i].dataset.menu,true);}
    });
  });
  Object.values(menuCategories).forEach(item=>{const img=new Image();img.src=item.image});

  const dialog=$('#lightbox');
  const bigImage=$('#lightboxImage');
  const bigCaption=$('#lightboxCaption');
  const close=$('.lightbox-close');
  let galleryTrigger=null;
  $$('.gallery-frame').forEach(trigger=>{
    trigger.addEventListener('click',()=>{
      if(!dialog||!bigImage)return;
      galleryTrigger=trigger;
      bigImage.src=trigger.dataset.img;
      bigImage.alt=$('img',trigger)?.alt || 'Enlarged concept photograph';
      if(bigCaption)bigCaption.textContent=trigger.dataset.caption || 'CONCEPT PHOTOGRAPHY';
      if(typeof dialog.showModal==='function')dialog.showModal();
      close?.focus();
    });
  });
  close?.addEventListener('click',()=>dialog?.close());
  dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  dialog?.addEventListener('close',()=>galleryTrigger?.focus());

  // Cursor-adjacent micro-movement is disabled for touch, reduced motion,
  // low-powered devices, and keyboard navigation.
  if(!reduced && matchMedia('(hover:hover) and (pointer:fine)').matches) {
    $$('.magnetic').forEach(el=>{
      let running=false, px=0,py=0;
      el.addEventListener('pointermove',e=>{
        if(running)return;
        const r=el.getBoundingClientRect();
        px=(e.clientX-(r.left+r.width/2))*.11;
        py=(e.clientY-(r.top+r.height/2))*.11;
        running=true;
        requestAnimationFrame(()=>{el.style.transform='translate('+px.toFixed(1)+'px,'+py.toFixed(1)+'px)';running=false});
      },{passive:true});
      el.addEventListener('pointerleave',()=>{el.style.transform='';});
      el.addEventListener('blur',()=>{el.style.transform='';});
    });
  }

  // Avoid a broken image showing as an empty rectangle; preserve layout.
  $$('img').forEach(img=>img.addEventListener('error',()=>{
    img.classList.add('media-unavailable');
    img.setAttribute('aria-label','Illustrative image temporarily unavailable');
  }));

  // Respect anchor offsets with sticky header. No scroll hijacking.
  window.addEventListener('load',updateScroll,{once:true});
})();