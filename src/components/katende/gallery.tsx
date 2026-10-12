import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { photos } from './content'
const gallery = [
  {src:photos.pork,alt:'Crispy grilled pork with lime and tomato salad',label:'THE CRAVING',className:'gallery-tall'},
  {src:photos.sides,alt:'Golden cassava with fresh tomato and onion salad',label:'THE COLOUR',className:'gallery-wide'},
  {src:photos.mood,alt:'A sunlit table with refreshing drinks',label:'THE MOOD',className:'gallery-small'},
  {src:photos.hero,alt:'A charcoal-grilled pork and cassava platter',label:'THE FIRE',className:'gallery-small'}
]
export function Gallery() {
  const [selected,setSelected] = useState<number | null>(null)
  const image = selected === null ? undefined : gallery[selected]
  return <section className="gallery-section section-space" aria-labelledby="gallery-heading"><div className="container">
    <div className="section-heading reveal"><div><p className="eyebrow"><span className="section-index">03 /</span> A FEEL FOR THE JOINT</p><h2 id="gallery-heading">FEAST YOUR <span className="text-ember-ink">EYES.</span></h2></div><p className="section-intro">The colours. The textures. The anticipation.<br />A visual direction for Katende.</p></div>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if(!open) setSelected(null) }}>
      <div className="photo-grid">{gallery.map((photo,i) => <figure className={`gallery-photo reveal ${photo.className}`} key={photo.label}><Dialog.Trigger asChild><Button variant="photo" aria-label={`Enlarge ${photo.alt} — illustrative photo`} onClick={() => setSelected(i)}><img src={photo.src} alt={`${photo.alt} — illustrative image, not the restaurant`} width={1280} height={1024} loading="lazy" /><span className="photo-label">{photo.label}<span className="photo-expand"><ArrowUpRight /></span></span></Button></Dialog.Trigger></figure>)}</div>
      <Dialog.Portal><Dialog.Overlay className="lightbox-overlay" /><Dialog.Content className="lightbox-content" aria-describedby="photo-description"><Dialog.Title className="sr-only">Illustrative concept photograph</Dialog.Title>{image && <img src={image.src} alt={image.alt} width={1280} height={1024} />}<p id="photo-description">Concept photography · Not a photograph of Katende Pork Joint</p><Dialog.Close asChild><Button variant="lightOutline" size="icon" className="lightbox-close" aria-label="Close photograph"><X /></Button></Dialog.Close></Dialog.Content></Dialog.Portal>
    </Dialog.Root>
    <p className="gallery-disclaimer">Illustrative imagery — replace with Katende’s real photos before launch.</p>
  </div></section>
}