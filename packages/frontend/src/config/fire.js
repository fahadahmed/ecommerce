import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9FMipqLPuQljcgmOy3qWpqGbDzAOk3yg",
  authDomain: "ecommerce-8c3a8.firebaseapp.com",
  databaseURL: "https://ecommerce-8c3a8.firebaseio.com",
  projectId: "ecommerce-8c3a8",
  storageBucket: "ecommerce-8c3a8.appspot.com",
  messagingSenderId: "986285318316",
  appId: "1:986285318316:web:89f2a95a5744cbd8497f09",
  measurementId: "G-63MZ8B7D74"
}

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
export const firebaseAuth = firebase.auth;