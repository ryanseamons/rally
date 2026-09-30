// Rally service worker: lets practice pages open without a connection.
// Pages are network-first (fresh when online, cached copy when offline).
// Hashed build files are cache-first. Audio is not cached here because
// media range requests do not play reliably from a service worker cache.
// Nothing here touches the notebook, which lives in localStorage.
//
// To retire this worker, replace this file with one that calls
// self.registration.unregister() and deletes caches, then deploy.
const VERSION = "rally-v1";
const SHELL = `${VERSION}-shell`;
const ASSETS = `${VERSION}-assets`;
const STATIC = `${VERSION}-static`;
const MAX_ASSETS = 40;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((cache) => cache.add(new Request("/", { cache: "reload" })))
      .catch(() => {})
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((key) => !key.startsWith(VERSION)).map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

async function trim(cacheName, max) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  await Promise.all(keys.slice(0, Math.max(0, keys.length - max)).map((key) => cache.delete(key)));
}

// App routes (/, /timer, /notebook…) all serve the same page. Files such as
// /move-notebook.html are separate pages and must not replace the app shell.
const isAppRoute = (pathname) => !/\.[a-z0-9]+$/i.test(pathname);

async function networkFirstPage(request, url) {
  try {
    const response = await fetch(request);
    if (
      isAppRoute(url.pathname) &&
      response.ok &&
      response.headers.get("content-type")?.includes("text/html")
    ) {
      const cache = await caches.open(SHELL);
      await cache.put("/", response.clone());
    }
    return response;
  } catch {
    const cached = isAppRoute(url.pathname)
      ? await caches.match("/", { cacheName: SHELL })
      : undefined;
    return cached || Response.error();
  }
}

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request, { cacheName });
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    await cache.put(request, response.clone());
    if (cacheName === ASSETS) trim(ASSETS, MAX_ASSETS);
  }
  return response;
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(STATIC);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || network;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request, url));
  } else if (url.pathname.startsWith("/assets/")) {
    event.respondWith(cacheFirst(request, ASSETS));
  } else if (/^\/(fonts|images|icons)\//.test(url.pathname) || url.pathname === "/favicon.svg") {
    event.respondWith(staleWhileRevalidate(request));
  }
});
