import { useState } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { menuUrl, photos } from './content'
const categories = ['From the grill','Sides','Drinks'] as const
const items = {
  'From the grill':[{title:'Grilled pork platter',description:'A charcoal-grill idea, with crisp edges and a generous spirit.',image:photos.pork},{title:'The sharing grill',description:'A little fire. A table full of possibilities.',image:photos.hero}],
  'Sides':[{title:'Roasted cassava',description:'Golden, rustic and made to sit beside the grill.',image:photos.sides},{title:'Fresh tomato & onion',description:'A bright, fresh contrast to the smoky flavours.',image:photos.pork}],
  'Drinks':[{title:'Something refreshing',description:'A cool accompaniment to a warm gathering.',image:photos.mood},{title:'A squeeze of citrus',description:'A fresh drinks concept for a sun-filled afternoon.',image:photos.sides}]
}
export function MenuPreview() {
  const [category,setCategory] = useState<typeof categories[number]>('From the grill')
  return <section id="menu" className="menu-section section-space">
    <div className="container">
      <div className="section-heading reveal"><div><p className="eyebrow"><span className="section-index">02 /</span> THE MENU CONCEPT</p><h2>A TASTE OF<br />WHAT’S <span className="text-primary">POSSIBLE.</span></h2></div><p className="section-intro">A little inspiration for your next craving.<br />For the real selection, go straight to the source.</p></div>
      <div className="menu-toolbar reveal"><div className="category-tabs" role="group" aria-label="Example menu categories">{categories.map(c => <Button key={c} variant="category" data-active={category === c} aria-pressed={category === c} onClick={() => setCategory(c)}>{c}</Button>)}</div><span className="tiny-label">EXAMPLE CATEGORIES · NOT AN OFFICIAL MENU</span></div>
      <div className="menu-items" aria-live="polite">{items[category].map((item,i) => <article className="menu-item" key={item.title}><div className="menu-item-photo"><img src={item.image} alt={`${item.title} — illustrative concept photography`} width={640} height={480} loading="lazy" /></div><div className="menu-item-content"><span className="tiny-label">0{i+1} / ILLUSTRATIVE MENU CONCEPT</span><h3>{item.title}</h3><p>{item.description}</p><div className="menu-item-bottom"><span>Ask for current menu</span><ArrowUpRight aria-hidden="true" /></div></div></article>)}</div>
      <div className="menu-footer"><p>Sample menu concept — request the official menu from the restaurant.</p><Button asChild variant="ember" size="lg"><a href={menuUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> Ask for the current menu <ArrowUpRight /></a></Button></div>
    </div>
  </section>
}