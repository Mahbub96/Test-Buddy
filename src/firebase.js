import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import {
    collection, getFirestore
} from 'firebase/firestore';
import { useEffect, useState } from 'react';


const firebaseConfig = {
  apiKey: "AIzaSyDXxQw_FGXHwbYG_IKsz3f5HTpUG2UaO1A",
  authDomain: "fir-tut-e79d5.firebaseapp.com",
  projectId: "fir-tut-e79d5",
  storageBucket: "fir-tut-e79d5.appspot.com",
  messagingSenderId: "476774006469",
  appId: "1:476774006469:web:ec375122824fc214a7baac",
  measurementId: "G-8N4LS89D9Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
// eslint-disable-next-line no-unused-vars
const colRef = collection(db, 'cafes');


export { app };
export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password); 
}
export function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password); 
}
export function logOut(){
    return signOut(auth);
}
export function useAuth(){
    const [currUser, setCurrUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrUser(user));
        return unsub;
    });
    return currUser;
}

