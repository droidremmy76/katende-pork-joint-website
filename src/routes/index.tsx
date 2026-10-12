import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { ArrowDown, ArrowUpRight, Flame, MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/katende/header'
import { MenuPreview } from '@/components/katende/menu-preview'
import { Gallery } from '@/components/katende/gallery'
import { Visit } from '@/components/katende/visit'
import { mapsUrl, photos } from '@/components/katende/content'

export const Route = createFileRoute('/')({
  component: Index,
  head: () => ({meta:[
    {title:'Katende Pork Joint — 2026 Website Concept'},
    {name:'description',content:'An independent homepage concept for Katende Pork Joint Makindye, Kampala. Illustrative photography and sample menu ideas. Contact the restaurant for current details.'},
    {property:'og:title',content:'Katende Pork Joint — 2026 Website Concept'},
    {property:'og:description',content:'A private, independent restaurant website concept for Makindye, Kampala. Photos illustrative; menu and opening hours to be confirmed.'},
    {property:'og:type',content:'website'},
    {name:'twitter:card',content:'summary_large_image'},
    {name:'robots',content:'noindex, nofollow'}
  ]})
})
function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) {entry.target.classList.add('revealed');observer.unobserve(entry.target)} }) },{threshold:0.08})
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  },[])
  return <><Header /><main id="main">
    <section id="home" className="hero" aria-labelledby="hero-title">
      <img className="hero-image" src={photos.hero} alt="Illustrative charcoal-grilled pork with cassava and fresh salad — not a Katende restaurant photograph" width={1920} height={1088} fetchPriority="high" />
      <div className="hero-overlay" /><div className="ember-glow" />
      <div className="container hero-content"><p className="eyebrow hero-eyebrow"><span className="live-dot" /> MAKINDYE, KAMPALA</p><h1 id="hero-title">THE FIRE.<br />THE FLAVOUR.<br /><span>THE JOINT.</span></h1><div className="hero-subline"><p>Come hungry. Leave happy.</p><span>PROPOSED BRAND SLOGAN</span></div><div className="hero-actions"><Button asChild variant="ember" size="lg"><a href="#menu">Explore the menu <ArrowUpRight /></a></Button><Button asChild variant="lightOutline" size="lg"><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><MapPin /> Get directions</a></Button></div></div>
      <div className="hero-bottom container"><a href="#experience" className="scroll-cue"><ArrowDown /> <span>KEEP THE FIRE GOING</span></a><p>Independent concept demo · Photos illustrative · Menu to be confirmed</p><span className="hero-coordinate">KAMPALA / UG</span></div>
      <div className="hero-side-label">CHARCOAL SPIRIT. KAMPALA SOUL.</div>
    </section>
    <section className="attention-strip" aria-label="Restaurant location and public listing"><div className="container attention-inner"><p>PORK. FIRE. GOOD COMPANY.<Flame /></p><div className="listing-info"><span><MapPin /> Makindye, Kampala</span><a href={mapsUrl} target="_blank" rel="noopener noreferrer"><span><Star className="rating-star" /> <strong>4.2</strong> / 115 reviews <ArrowUpRight /></span><small>Google listing · at research time, not live</small></a></div></div></section>
    <section id="experience" className="story-section section-space"><div className="container"><div className="section-heading reveal"><p className="eyebrow"><span className="section-index">01 /</span> THE KATENDE SPIRIT</p><span className="tiny-label">BAR & GRILL · MAKINDYE</span></div><div className="story-grid"><div className="story-image reveal"><img src={photos.pork} alt="Illustrative plated charcoal pork with lime and salad" width={1024} height={1280} loading="lazy" /><span className="image-caption">01 — CONCEPT PHOTOGRAPHY</span><div className="image-stamp" aria-hidden="true"><Flame /><span>FIRE.<br />FLAVOUR.<br />FEELING.</span></div></div><div className="story-copy reveal"><h2>MADE FOR<br />THE <span className="text-ember-ink">CRAVING.</span></h2><p className="story-lead">Some things just belong together.<br />Charcoal. Pork. Good company.</p><p>Inspired by Kampala’s love for the grill, this concept brings a bold, warm visual voice to Katende Pork Joint Makindye. A celebration of the simple pleasure of gathering around good food.</p><div className="story-note"><span className="tiny-label">A PLACE IN MAKINDYE. A MOOD OF ITS OWN.</span><a href="#visit">Find your way to Katende <ArrowUpRight /></a></div><div className="story-side-photo"><img src={photos.sides} alt="Illustrative roasted cassava and fresh salad" width={1280} height={1024} loading="lazy" /><span>BRIGHT SIDES. BIG POSSIBILITIES.<small>Illustrative food concept</small></span></div></div></div></div></section>
    <MenuPreview /><Gallery /><Visit />
  </main></>
}