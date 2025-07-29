const CACHE_NAME = "roadtrip-cache-v1";
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  "/dag.js",
  "/dag.html",
  "/manifest.json",
  "/routes.json",
  "/img/denver.png",
  "/img/cheyenne.png",
  "/img/hotsprings.png",
  "/img/rapidcity.png",
  "/img/badlands.png",
  "/img/billings.png",
  "/img/cody.png",
  "/img/yellowstone.png",
  "/img/jacksonhole.png",
  "/img/saltlakecity.png",
  "/img/moab.png",
  "/img/amsterdam.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
