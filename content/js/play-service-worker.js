self.addEventListener('install', (event) => {
  // Service worker install hole kono specific kaj korte hole ekhane likhun
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Jodi network request fail kore, tahole fallback response dekhate paren ekhane
    })
  );
});
