// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkgbpHK7ywlcYC0-25tBMvcZ8PoeGCV3I",
  authDomain: "brainbuddy-2d486.firebaseapp.com",
  projectId: "brainbuddy-2d486",
  storageBucket: "brainbuddy-2d486.firebasestorage.app",
  messagingSenderId: "310353281151",
  appId: "1:310353281151:web:40c7afa59d21f399c5ff4a",
  measurementId: "G-5DR138WPK7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore(app);