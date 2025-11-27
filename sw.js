// Salesman PWA Service Worker
const CACHE_NAME = 'salesman-pwa-v1';

// Assets to cache on install
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/style.css',
    '/js/app.js',
    '/js/data.js',
    '/icons/icon-192.png',
    '/icons/icon-512.png'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    console.log('[ServiceWorker] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('[ServiceWorker] Skip waiting');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.log('[ServiceWorker] Cache failed:', error);
            })
    );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
    console.log('[ServiceWorker] Activate');
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('[ServiceWorker] Removing old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[ServiceWorker] Claiming clients');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }

    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Return cached response
                    console.log('[ServiceWorker] Serving from cache:', event.request.url);
                    return cachedResponse;
                }

                // Fetch from network
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Check if valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Clone response for caching
                        const responseToCache = networkResponse.clone();

                        // Cache the fetched response
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    })
                    .catch((error) => {
                        console.log('[ServiceWorker] Fetch failed:', error);
                        // Return offline fallback if available
                        return caches.match('/index.html');
                    });
            })
    );
});

// Handle messages from main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Background sync for offline actions (future enhancement)
self.addEventListener('sync', (event) => {
    console.log('[ServiceWorker] Sync event:', event.tag);
    if (event.tag === 'sync-data') {
        event.waitUntil(syncData());
    }
});

// Sync data function placeholder
async function syncData() {
    console.log('[ServiceWorker] Syncing data...');
    // Future: sync offline data with server
}

// Push notification handler (future enhancement)
self.addEventListener('push', (event) => {
    console.log('[ServiceWorker] Push received');
    const options = {
        body: event.data ? event.data.text() : 'New notification',
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            { action: 'explore', title: 'View' },
            { action: 'close', title: 'Close' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Salesman PWA', options)
    );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
    console.log('[ServiceWorker] Notification clicked');
    event.notification.close();

    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/index.html')
        );
    }
});
