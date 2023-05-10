import { auth, db } from "./confirebase.js";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const googleAuth = (router) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user, "user");
      if (user.emailVerified) {
        router.push("/Wall");
      }
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      if (!user.emailVerified) throw new Error("Email not verified");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, "errormensaje");
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const guardarNota = async (notas) => {
  const db = getFirestore();
  try {
    const docRef = await addDoc(collection(db, "notas"), {
      contenido: notas,
      timestamp: Date.now(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const obtenerNotas = async () => {
  const querySnapshot = await getDocs(collection(db, "notas"));
  const notes = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    notes.push({ ...doc.data(), id: doc.id });
  });
  return notes;
};

export const eliminarNota = (id) => {
  // console.log('=>', id)
  deleteDoc(doc(db, "notas, id"));
};
