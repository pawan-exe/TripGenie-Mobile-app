// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdJvEVO1D3QyF7kjOwuE4PVtRQK73GCzE",
  authDomain: "tripgenie-4a693.firebaseapp.com",
  projectId: "tripgenie-4a693",
  storageBucket: "tripgenie-4a693.appspot.com",
  messagingSenderId: "758142399143",
  appId: "1:758142399143:web:de1421e60d6b04dc45e182",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
