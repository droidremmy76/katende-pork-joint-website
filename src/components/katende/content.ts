import hero from '@/assets/grill-hero.jpg'
import pork from '@/assets/pork-detail.jpg'
import sides from '@/assets/sides.jpg'
import mood from '@/assets/table-mood.jpg'

export const photos = { hero, pork, sides, mood }
export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Katende%20Pork%20Joint%20Makindye%20Kampala'
export const whatsappUrl = 'https://wa.me/256754854668'
export const menuUrl = `${whatsappUrl}?text=${encodeURIComponent('Hello Katende Pork Joint, could you please share your current menu and prices?')}`
export const phoneUrl = 'tel:+256754854668'
export const navigation = [{label:'Home',href:'#home'},{label:'The Menu',href:'#menu'},{label:'Experience',href:'#experience'},{label:'Find Us',href:'#visit'}]