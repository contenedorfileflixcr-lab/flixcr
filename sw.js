// Service worker mínimo: sin caché (siempre carga la última versión). Solo hace la web instalable.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
