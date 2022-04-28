import { initializeApp } from "firebase/app";
import NOTE_DATA from "../notes-data";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzeTjlPHFv6nCM-JAAfcLhNEgxE2KKQBk",
  authDomain: "note-x-personal.firebaseapp.com",
  projectId: "note-x-personal",
  storageBucket: "note-x-personal.appspot.com",
  messagingSenderId: "1090163980382",
  appId: "1:1090163980382:web:171046c6e3dcdac1489ccf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth(app);

// const provider = GoogleAuthProvider();

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      // Signed in
      const user = userCredential.user;
      return user;
    }
  );
};
export const createUserDocFromAuth = async (userAuth, full_name) => {
  console.log(userAuth);
  const userRef = doc(db, "users", userAuth.uid);

  const docSnapshot = await getDoc(userRef);
  if (!docSnapshot.exists()) {
    const date = new Date();

    await setDoc(userRef, { full_name, created_at: date });
  }

  return userRef;
};
export const getUserDataAsync = async (user) => {
  if (!user) return;

  const { uid } = user;
  const userDataRef = doc(db, `users/${uid}`);
  console.log(userDataRef);

  const userDataSnapShot = await getDoc(userDataRef);

  if (!userDataSnapShot.exists()) return;
  // if (userDataSnapShot.data().notes) return;
  // await setDoc(userDataRef, NOTE_DATA);
  const notesData = userDataSnapShot.data().notes;

  return notesData;

  // await setDoc(userDataRef, { full_name, created_at: date });
};

export const signUserInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => console.log(userCredential)
    );
  } catch (error) {
    console.log(error);
  }
};

export const signUserOut = () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);