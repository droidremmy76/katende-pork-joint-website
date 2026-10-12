// Demonstration photography; the original generated images are retained in the Lovable editor.
const hero="https://images.unsplash.com/photo-1753538430375-029511de8f7b?auto=format&fit=crop&w=1800&q=85";
const pork="https://images.unsplash.com/photo-1767974968707-db3d448d4ef3?auto=format&fit=crop&w=1200&q=85";
const sides="https://images.unsplash.com/photo-1777502286499-d91d3339be30?auto=format&fit=crop&w=1200&q=85";
const mood="https://images.unsplash.com/photo-1767973475472-9ed12d01a5fd?auto=format&fit=crop&w=1200&q=85";

export const photos = { hero, pork, sides, mood }
export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Katende%20Pork%20Joint%20Makindye%20Kampala'
export const whatsappUrl = 'https://wa.me/256754854668'
export const menuUrl = `${whatsappUrl}?text=${encodeURIComponent('Hello Katende Pork Joint, could you please share your current menu and prices?')}`
export const phoneUrl = 'tel:+256754854668'
export const navigation = [{label:'Home',href:'#home'},{label:'The Menu',href:'#menu'},{label:'Experience',href:'#experience'},{label:'Find Us',href:'#visit'}]