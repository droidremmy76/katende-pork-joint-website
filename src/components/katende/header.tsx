import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, MessageCircle, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navigation, whatsappUrl } from './content'

export function Wordmark() {
  return <span className="wordmark"><span>KATENDE<span className="wordmark-dot">.</span></span><span className="wordmark-sub">PORK JOINT / MAKINDYE</span></span>
}
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => { setScrolled(window.scrollY > 35); const total = document.documentElement.scrollHeight - window.innerHeight; document.documentElement.style.setProperty('--scroll-progress', `${total > 0 ? window.scrollY / total * 100 : 0}%`) }
    update(); window.addEventListener('scroll',update,{passive:true}); return () => window.removeEventListener('scroll',update)
  },[])
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const close = (e: KeyboardEvent) => { if(e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown',close)
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown',close) }
  },[open])
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <a href="#home" aria-label="Katende Pork Joint home" onClick={() => setOpen(false)}><Wordmark /></a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(n => <a key={n.label} href={n.href}>{n.label}</a>)}</nav>
      <div className="header-actions"><Button asChild variant="ember" className="nav-chat"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer"><MessageCircle /> <span>Chat on WhatsApp</span><ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="mobile-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      <div className="scroll-progress" />
    </header>
    <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" inert={!open}>{navigation.map((n,i) => <a href={n.href} key={n.label} onClick={() => setOpen(false)}><span className="eyebrow">0{i+1}</span>{n.label}<ArrowUpRight /></a>)}<p className="eyebrow">MAKINDYE, KAMPALA · UGANDA</p></nav>
  </>
}