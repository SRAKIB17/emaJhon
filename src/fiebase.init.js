// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDUaHDCnJUdKo_eG6BhuQ33e3JjQQP6OE",
  authDomain: "ema-john-simple-63ffb.firebaseapp.com",
  projectId: "ema-john-simple-63ffb",
  storageBucket: "ema-john-simple-63ffb.appspot.com",
  messagingSenderId: "58538457775",
  appId: "1:58538457775:web:82be8234a652765e7cf25a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;