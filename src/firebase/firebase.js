// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwSn8sE5kNtuD2d5jrWTJr5hjH31y7eNI",
  authDomain: "final-7f142.firebaseapp.com",
  projectId: "final-7f142",
  storageBucket: "final-7f142.appspot.com",
  messagingSenderId: "619406085612",
  appId: "1:619406085612:web:861e44999f3c9c93bc04c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
