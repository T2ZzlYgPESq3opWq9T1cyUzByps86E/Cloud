const CACHE_NAME = 'alvee-play-cache-v1';

// List of URLs to cache
const urlsToCache = [
  '/',
  '/favicon.ico',
  '/favicon.ico',
  '/feeds/posts/default',
  '/feeds/posts/default?alt=rss',
  '/feeds/comments/default?alt=rss'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Service Worker: Installing and caching assets');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
