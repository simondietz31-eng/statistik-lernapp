// Offline caching for the Lernapp. Stale-while-revalidate: same-origin GET
// requests are served from cache instantly if present (so the app works
// offline / on flaky connections), while a network request always runs in
// the background to refresh the cache for the *next* load. Cross-origin
// requests (KaTeX, Firebase CDN scripts) are left untouched.
//
// Bump CACHE_VERSION when static asset filenames/paths change shape in a way
// that needs an explicit cutover; content edits alone don't require it since
// the network fetch already keeps the cache fresh on every reload.
const CACHE_VERSION = "v1";
const CACHE_NAME = "lernapp-" + CACHE_VERSION;

const CORE_ASSETS = [
  "./",
  "index.html",
  "css/style.css",
  "manifest.json",
  "favicon.svg"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) { return cache.addAll(CORE_ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      const networkFetch = fetch(event.request).then(function (response) {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function () { return cached; });

      return cached || networkFetch;
    })
  );
});
