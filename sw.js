let CACHE_NAME = 'site-cache';
let assets = [
    '/',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/index.html',
    '/restaurant.html',
  ];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(assets);
      })
  );
});

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.open('CACHE_NAME').then(function(cache){
//       return caches.match(event.request).then(function(response){
//         return response || fetch(event.request);
//       })
//     });
//   );
// });

self.addEventListener("fetch", function (event) {
  console.log("Request", event.request.url);
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetch(event.request);
    })
    .catch(function(error) {
      console.error("Error: ", error);
    })
  );
});


// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//       caches.match(event.request).then(function(response) {
//           return response || fetch(event.request);
//       })
//   );
// });
