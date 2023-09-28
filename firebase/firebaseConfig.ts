// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsaqSKaXUe-Vw93CAgyy-4Qe_13HDQxDs",
  authDomain: "fangosolutions-17714.firebaseapp.com",
  projectId: "fangosolutions-17714",
  storageBucket: "fangosolutions-17714.appspot.com",
  messagingSenderId: "391028245388",
  appId: "1:391028245388:web:67148b927b725ac1748ca9",
  measurementId: "G-4Z4JPXJ3JE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
