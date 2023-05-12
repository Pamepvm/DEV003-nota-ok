// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZskwIhTpARSXBB40pjlc5G9hZxBuJ7WU",
  authDomain: "notes-e4a11.firebaseapp.com",
  projectId: "notes-e4a11",
  storageBucket: "notes-e4a11.appspot.com",
  messagingSenderId: "226198674697",
  appId: "1:226198674697:web:05e97c3b2f1a07a05687d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
