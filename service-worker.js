self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("pwa-cache-v1").then(cache => {
            return cache.addAll([
                "/pwa-interestcal-app/",
                "/pwa-interestcal-app/index.html",
                "/pwa-interestcal-app/styles.css",
                "/pwa-interestcal-app/script.js",
                "/pwa-interestcal-app/icons/icon-192x192.png",
                "/pwa-interestcal-app/icons/icon-512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
