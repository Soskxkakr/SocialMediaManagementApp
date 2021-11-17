// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRzkrJNEO9sF7FgZs8YEr90o7AZ_ZaURU",
  authDomain: "final-year-project-59d38.firebaseapp.com",
  projectId: "final-year-project-59d38",
  storageBucket: "final-year-project-59d38.appspot.com",
  messagingSenderId: "607101438555",
  appId: "1:607101438555:web:b7d53181447423e81e0d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };