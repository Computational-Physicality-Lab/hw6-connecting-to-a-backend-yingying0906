// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA5oGv7Z5jEGgsoZYrHn0k-cGS0tGRF4g",
  authDomain: "pui-hw6-ca5c2.firebaseapp.com",
  projectId: "pui-hw6-ca5c2",
  storageBucket: "pui-hw6-ca5c2.appspot.com",
  messagingSenderId: "830478046917",
  appId: "1:830478046917:web:3c4d6da4717ed62d7602ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const firestore = getFirestore();
export { auth, provider, firestore };
