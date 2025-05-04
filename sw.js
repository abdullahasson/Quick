const CACHE_NAME = 'cafe-menu-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/cheesecake.jpg', // أضف كل الصور والملفات اللازمة
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