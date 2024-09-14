// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVjI2u8QDIReSDnqH6uvyynmtjJCEOrT0",
  authDomain: "netflixgpt-ced03.firebaseapp.com",
  projectId: "netflixgpt-ced03",
  storageBucket: "netflixgpt-ced03.appspot.com",
  messagingSenderId: "773883648086",
  appId: "1:773883648086:web:3b88175158400afbc9c3f7",
  measurementId: "G-QQ64NVKW50",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
