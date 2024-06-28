// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBosIDU9TuKmaFj3sFJhkNqmdTjWxyvadg",
  authDomain: "eurekae-login.firebaseapp.com",
  projectId: "eurekae-login",
  storageBucket: "eurekae-login.appspot.com",
  messagingSenderId: "468113493940",
  appId: "1:468113493940:web:bc2041c5f89988ee026ce1"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

// Export the initialized app instance
export default appFirebase;

// Example usage of Auth
export const auth = getAuth(appFirebase);

// Example usage of Messaging
export const messaging = getMessaging(appFirebase);
