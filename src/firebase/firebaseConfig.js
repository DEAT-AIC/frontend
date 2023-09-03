// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD1-BMqiVaMKtnzqZlC46yK65N2583vdRg",
  authDomain: "aic-deat.firebaseapp.com",
  projectId: "aic-deat",
  storageBucket: "aic-deat.appspot.com",
  messagingSenderId: "593804715629",
  appId: "1:593804715629:web:8a29b08dde1b5415a4c164",
  measurementId: "G-FVWB74PKBF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);