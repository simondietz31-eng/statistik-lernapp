// Offline caching for the Lernapp. Network-first: same-origin GET requests
// always try the network first, so an online user always gets the latest
// deployed code/content on every load. Only when the network fails (offline,
// flaky connection) do we fall back to whatever's cached from a previous
// visit. Cross-origin requests (KaTeX, Firebase CDN scripts) are left
// untouched.
//
// Bump CACHE_VERSION when static asset filenames/paths change shape in a way
// that needs an explicit cutover.
const CACHE_VERSION = "v2";
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
    fetch(event.request).then(function (response) {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
      }
      return response;
    }).catch(function () {
      return caches.match(event.request);
    })
  );
});
