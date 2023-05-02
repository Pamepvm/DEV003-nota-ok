// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: "AIzaSyBiNiCoDprZUEJj_46GlOc34s5ALnRw4DY",
  authDomain: "notes-763e1.firebaseapp.com",
  projectId: "notes-763e1",
  storageBucket: "notes-763e1.appspot.com",
  messagingSenderId: "51976653632",
  appId: "1:51976653632:web:2b2b37ca959ec3169388a5",
  measurementId: "G-M7CD26FPBE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);