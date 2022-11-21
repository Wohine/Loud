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

export {auth, db, sendPasswordReset, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword}

export {db,auth};