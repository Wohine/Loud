import { initializeApp } from "firebase/app";
import{ GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail, signOut} from "firebase/auth";
import {getFirestore, query, getDocs,collection,where,addDoc} from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB563WxmDvDfRn9z2QEfSFg0tJN2I530c0",
    authDomain: "loud-d3eb3.firebaseapp.com",
    databaseURL: "https://loud-d3eb3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "loud-d3eb3",
    storageBucket: "loud-d3eb3.appspot.com",
    messagingSenderId: "99511316619",
    appId: "1:99511316619:web:af4cc96cb837f11659248e",
    measurementId: "G-69CS7W64RQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};


const logout = () => {
    signOut(auth);
};

export {auth, db, sendPasswordReset, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword, logout}