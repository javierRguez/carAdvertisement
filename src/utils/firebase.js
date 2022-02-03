import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDjzJ5hQ47xjYXxV7WecLomYSCNHvhu2GU',
  authDomain: 'mi-coche-ford.firebaseapp.com',
  projectId: 'mi-coche-ford',
  storageBucket: 'mi-coche-ford.appspot.com',
  messagingSenderId: '1070710443705',
  appId: '1:1070710443705:web:aa0eba43ea4211477fd568',
  measurementId: 'G-CME1KREDG2',
}

const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)

export { analytics, firebase, logEvent }
