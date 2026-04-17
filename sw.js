const CACHE_NAME = "ravi-palace-chatbot-v1";

const FILES_TO_CACHE = [
  "./",
  "./chatbot-booking.html",
  "./manifest.json",
  "./logo-192.png",
  "./logo-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyAMnRh3FgghMFuJXW9TIYpZ7TmLG7mCsI",
  authDomain: "hotel-ravi-palace-chatbot.firebaseapp.com",
  projectId: "hotel-ravi-palace-chatbot",
  storageBucket: "hotel-ravi-palace-chatbot.firebasestorage.app",
  messagingSenderId: "450496502208",
  appId: "1:450496502208:web:552e3f2ae709cc5b675025"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "logo-192.png"
  });
});
