/* eslint-disable no-restricted-globals */

self.addEventListener('push', event => {
  const title = 'Hello'
  const options = {
    body: event.data.text(),
    icon: './icon.png',
    badge: './badge.png',
  }

  event.waitUntil(self.registration.showNotification(title, options))
})
