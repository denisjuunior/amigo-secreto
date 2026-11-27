/* Service worker da casca PWA do Amigo Secreto.
   Só guarda os arquivos da casca (para instalar e abrir rápido).
   O app em si (script.google.com) sempre vem da internet — não é cacheado. */
var CACHE = 'amigo-casca-v1';
var ARQUIVOS = [
  './', './index.html', './manifest.webmanifest',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon-180.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ARQUIVOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (ks) {
      return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);
  // Só mexe no que é da própria casca (mesma origem). O resto (Apps Script) vai direto para a rede.
  if (url.origin === self.location.origin) {
    e.respondWith(caches.match(e.request).then(function (r) { return r || fetch(e.request); }));
  }
});
