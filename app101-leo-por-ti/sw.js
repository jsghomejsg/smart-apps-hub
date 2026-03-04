// Nombre del archivo: sw.js
self.addEventListener('fetch', (event) => {
    // Este código permite que la app funcione online
    // Es el requisito mínimo para que sea instalable
    event.respondWith(fetch(event.request));
});