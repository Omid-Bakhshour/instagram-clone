// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Z2gNtDwlcaubMVKfYVy9ZUfkoc-vVzQ",
  authDomain: "insta-clone-34f0b.firebaseapp.com",
  projectId: "insta-clone-34f0b",
  storageBucket: "insta-clone-34f0b.appspot.com",
  messagingSenderId: "727568060655",
  appId: "1:727568060655:web:29bbe3c20564af0bd78b1a"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };