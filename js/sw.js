// // Define the cache version
// const CACHE_NAME = 'my-site-cache-v2';

// // List of URLs to cache
// const CACHE_URLS = [
//     '/',
//     '/index.html',
//     '/styles.css',
//     '/script.js',
//     '/wp-content/uploads/2023/06/',
//     '/2023/movies-2023/01/',
//     '/2023/movies-2023/02/',
//     '/2023/tv-shows-2023/01/',
//     '/2023/tv-shows-2023/02/',
//     '/2023/adult-2023/01/',
//     '/2023/adult-2023/02/',
//     // Add more URLs of assets you want to cache here
// ];

// // Install event: Cache the specified URLs when the service worker is first registered
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then((cache) => {
//             console.log('Cache opened');
//             return cache.addAll(CACHE_URLS);
//         })
//     );
// });
// Define the cache version
const CACHE_NAME = 'my-site-cache-v2';

self.addEventListener('install', (event) => {
    event.waitUntil(
        fetch('/movies.json') // Fetch the movies JSON file
            .then((response) => response.json())
            .then((data) => {
                const cacheURLs = [
                    '/',
                    '/index.html',
                    '/styles.css',
                    '/script.js',
                    // Add more URLs of assets you want to cache here
                ];

                // Dynamically add the movie URLs and "movie.watch" URLs from the JSON
                data.movies.forEach((movie) => {
                    cacheURLs.push(movie.url, movie["movie.watch"]);
                });

                return caches.open(CACHE_NAME).then((cache) => {
                    console.log('Cache opened');
                    return cache.addAll(cacheURLs);
                });
            })
    );
});

// ... Rest of your service worker code ...



// Activate event: Clean up old caches when a new version of the service worker is activated
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event: Serve cached content, or fetch and cache new content if not in cache
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // If the request is in the cache, return the cached response
            if (response) {
                return response;
            }

            // If not, fetch the request from the network and cache it
            return fetch(event.request).then((response) => {
                // Clone the response to store in cache
                const responseToCache = response.clone();

                return caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                    return response;
                });
            });
        })
    );
});
