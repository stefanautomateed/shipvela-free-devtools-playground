// Service Worker — DevTools.play
// Cache-first for local assets, network-first for external APIs
const CACHE_VERSION = 'devtools-v1';
// Use relative paths so this works on GitHub Pages (subdirectory) or root
const LOCAL_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './js/playground.js',
  './js/tools-data.js',
  './manifest.json',
  './fonts/inter-400.woff2',
  './fonts/inter-500.woff2',
  './fonts/inter-600.woff2',
  './fonts/inter-700.woff2',
  './fonts/jetbrains-mono-400.woff2',
  './fonts/jetbrains-mono-500.woff2',
  './fonts/jetbrains-mono-600.woff2',
  './fonts/jetbrains-mono-700.woff2',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install: pre-cache all local assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(LOCAL_ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for local, network-first for external
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Same-origin (local assets) — cache-first
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        return response;
      }))
    );
    return;
  }

  // External requests (APIs) — network-first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
