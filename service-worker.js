const CACHE='finance-cloud-pwa-v3-2026.10.28';
const CORE=['/','/index.html','/config.js','/manifest.webmanifest','/icons/icon-192.png','/icons/icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if(url.hostname.includes('supabase.co')) return;

  // HTML/config luôn ưu tiên bản mới từ mạng, chỉ dùng cache khi mất mạng.
  const isFreshCritical = url.origin === self.location.origin && (
    url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '/config.js' || url.pathname === '/service-worker.js'
  );

  if(isFreshCritical) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(response => {
          if(response && response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
          return response;
        })
        .catch(() => caches.match(event.request).then(r => r || caches.match('/index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if(response && response.ok && url.origin === self.location.origin) {
        caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
      }
      return response;
    }))
  );
});
