const CACHE_NAME = 'cafe-menu-v1';
const ASSETS = [
  '/',
  '/styles.css',
  '/index.html',
  '/candies.html',
  '/cocktails.html',
  '/cold-drinks.html',
  '/hot-drinks.html',
  '/milkshakes.html',
  '/shisha.html',
  '/icons/apple-icon-114x114.png',
  '/icons/apple-icon-120x120.png',
  '/icons/apple-icon-144x144.png',
  '/icons/apple-icon-152x152.png',
  '/icons/apple-icon-180x180.png',
  '/icons/apple-icon-57x57.png',
  '/icons/apple-icon-60x60.png',
  '/icons/apple-icon-72x72.png',
  '/icons/apple-icon-76x76.png',
  '/icons/apple-icon.png',
  '/icons/favicon-16x16.png',
  '/icons/favicon-32x32.png',
  '/icons/favicon-96x96.png',
  '/icons/favicon.ico',
  '/icons/icon-192x192.png',
  '/icons/manifest.json',
  '/icons/ms-icon-144x144.png',
  '/icons/safari-pinned-tab.svg',
  // ... قم بإدراج جميع أصول الصفحة هنا
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});