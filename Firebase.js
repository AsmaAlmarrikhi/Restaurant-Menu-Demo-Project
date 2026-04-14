// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJglVJQ5JzMZ-77HG3VdLpn6uf0pF9KRo",
  authDomain: "restaurant-menu-demo-11613.firebaseapp.com",
  projectId: "restaurant-menu-demo-11613",
  storageBucket: "restaurant-menu-demo-11613.firebasestorage.app",
  messagingSenderId: "1009593305409",
  appId: "1:1009593305409:web:e2c2016c9ee3f523f179c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get the authenticated Firebase App
const firebaseApp = getApp(useRouter().query.__firebaseAppName);