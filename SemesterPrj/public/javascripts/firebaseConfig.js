// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALPNIieOL3a4ROgZFJgovhCLNqaHXX0hk",
  authDomain: "imageforwebsite-b15c6.firebaseapp.com",
  projectId: "imageforwebsite-b15c6",
  storageBucket: "imageforwebsite-b15c6.appspot.com",
  messagingSenderId: "85872154837",
  appId: "1:85872154837:web:e6647cefc6ab97169fea5c",
  measurementId: "G-JK7D23LYKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);