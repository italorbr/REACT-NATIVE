import firebase from "firebase"
import 'firebase/storage'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKywmSf0GMyDdBUkUu-0T4NUWXynnDpdc",
  authDomain: "react-calculadora-imc.firebaseapp.com",
  projectId: "react-calculadora-imc",
  storageBucket: "react-calculadora-imc.appspot.com",
  messagingSenderId: "135519917516",
  appId: "1:135519917516:web:f981779713a7ea8c90f969"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase
