// config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6LoBBTuYuaRbmQv0GbODLVwCWpGBl8Kc",
  authDomain: "blog-app-ac2a1.firebaseapp.com",
  projectId: "blog-app-ac2a1",
  storageBucket: "blog-app-ac2a1.appspot.com",
  messagingSenderId: "1053653330559",
  appId: "1:1053653330559:web:819706cba0f70687d3ed4a",
  measurementId: "G-14H2XF0Z1S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Exporting auth functions for convenience
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, addDoc, collection };
