// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export default appFirebase;