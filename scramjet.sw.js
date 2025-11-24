// Minimal service worker to activate Scramjet
self.addEventListener("fetch", (event) => {
  // For testing, just forward all requests
  event.respondWith(fetch(event.request));
});
