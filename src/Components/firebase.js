// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyIW2-szqnYjFb2JNIdCG3iLAghTbp5vc",
  authDomain: "learning-management-syst-1b841.firebaseapp.com",
  projectId: "learning-management-syst-1b841",
  storageBucket: "learning-management-syst-1b841.appspot.com",
  messagingSenderId: "1067518544217",
  appId: "1:1067518544217:web:fa781706a5105c6c302448",
  measurementId: "G-J9H4Z4HV2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
export const db = getFirestore(app)
export default app