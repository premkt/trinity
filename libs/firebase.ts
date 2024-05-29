// Import the functions you need from the SDKs you need
import { dividerClasses } from "@mui/material";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6hEw9rdhycbZtvLGaev8GJKuEuQHSLzE",
  authDomain: "trinity-408414.firebaseapp.com",
  projectId: "trinity-408414",
  storageBucket: "trinity-408414.appspot.com",
  messagingSenderId: "1068725434575",
  appId: "1:1068725434575:web:12882af30432ff01d59fba"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

 
export default firebaseApp;