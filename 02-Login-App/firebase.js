// Import the functions you need from the SDKs you need
import * as firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7OEer5mVkzaUNsWE8utO6eJHq65vLeFQ',
  authDomain: 'login-app-rn-b3ea8.firebaseapp.com',
  projectId: 'login-app-rn-b3ea8',
  storageBucket: 'login-app-rn-b3ea8.appspot.com',
  messagingSenderId: '601250822514',
  appId: '1:601250822514:web:297782724c76c31c0e85eb',
}

// Initialize Firebase
let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth }
