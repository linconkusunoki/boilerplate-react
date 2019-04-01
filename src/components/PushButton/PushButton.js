import React, { useState, useEffect } from 'react'
import urlB64ToUint8Array from 'utils/urlB64ToUint8Array'
import { PUBLIC_KEY } from 'config/env'

const PushButton = () => {
  const [subscription, setSubscription] = useState(null)

  const handleClick = () => {
    if (subscription) {
      unsubscribeUser(setSubscription)
    } else {
      subscribeUser(setSubscription)
    }
  }

  useEffect(() => {
    updateSubscriptionOnServer(subscription)
  }, [subscription])

  if (Notification.permission === 'denied') {
    return <button disabled={true}>Notifications blocked</button>
  }

  return (
    <button onClick={handleClick}>
      {subscription ? 'Disable' : 'Enable'} Notifications
    </button>
  )
}

function updateSubscriptionOnServer(subscription) {
  if (subscription) {
    // TODO send to server
    console.log(JSON.stringify(subscription))
  }
}

function subscribeUser(setSubscription) {
  const applicationServerKey = urlB64ToUint8Array(PUBLIC_KEY)
  navigator.serviceWorker.ready.then(registration => {
    registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      })
      .then(function(subscription) {
        console.log('User is subscribed.')
        const notification = new Notification('You have subscribed!')
        setSubscription(subscription)
      })
      .catch(function(err) {
        console.log('Failed to subscribe the user: ', err)
      })
  })
}

function unsubscribeUser(setSubscription) {
  navigator.serviceWorker.ready.then(registration => {
    registration.pushManager
      .getSubscription()
      .then(function(subscription) {
        if (subscription) {
          return subscription.unsubscribe()
        }
      })
      .catch(function(error) {
        console.log('Error unsubscribing', error)
      })
      .then(function() {
        console.log('User is unsubscribed.')
        setSubscription(null)
      })
  })
}

export default PushButton
