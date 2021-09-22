import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { clientsClaim, skipWaiting } from 'workbox-core'
import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching'
import { registerRoute, NavigationRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'

/**
 * Precache all of the assets generated by your build process.
 * Their URLs are injected into the manifest variable below.
 * This variable must be present somewhere in your service worker file,
 * even if you decide not to use precaching. See https://cra.link/PWA
 */
const ignored = self.__WB_MANIFEST

registerRoute(
    ({ request }) => request.mode === 'navigate',
    new NetworkFirst({
        cacheName: 'pages',
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200]
            })
        ]
    })
)