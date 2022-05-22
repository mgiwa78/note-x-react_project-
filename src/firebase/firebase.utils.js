import { initializeApp } from "firebase/app";

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
  try {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
      }
    );
  } catch (error) {
    if (error.message === "Firebase: Error (auth/network-request-failed).")
      return alert("No network connection, check your network and try again");
    if (
      error.message ===
      "FirebaseError: Firebase: Error (auth/network-request-failed)."
    )
      return alert("No network connection, check your network and try again");
    else alert(error.message);
  }
};

export const createUserDocFromAuth = async (userAuth, full_name) => {
  const userRef = doc(db, "users", userAuth.uid);

  try {
    const docSnapshot = await getDoc(userRef);
    if (!docSnapshot.exists()) {
      const date = new Date();

      await setDoc(userRef, { full_name, created_at: date });
    }
  } catch (error) {
    if (error.message === "Firebase: Error (auth/network-request-failed).")
      return alert("No network connection, check your network and try again");
    else alert(error.message);
  }

  return userRef;
};

export const syncNoteData = async (user, notes) => {
  try {
    const { uid } = user;

    const userDataRef = doc(db, `users/${uid}/`);

    const userDataSnapShot = await getDoc(userDataRef);

    const notesRawData = await userDataSnapShot.data().notes;

    if (notes !== notesRawData) {
      const toSyncNote = { notes };
      await setDoc(userDataRef, toSyncNote);

      alert("Your notes have been synced successfully");
    }
  } catch (error) {
    if (error.message === "Firebase: Error (auth/network-request-failed).")
      return alert("No network connection, check your network and try again");
    else alert(error.message);
  }
};

export const getUserDataAsync = async (user) => {
  let acc = {};
  if (!user) return;

  const { uid } = user;
  try {
    const userDataRef = doc(db, `users/${uid}/`);
    const userDataSnapShot = await getDoc(userDataRef);

    if (!userDataSnapShot.exists()) return;
    // if (userDataSnapShot.data().notes) return;
    // await setDoc(userDataRef, NOTE_DATA);
    const notesRawData = await userDataSnapShot.data().notes;

    if (!notesRawData) return;

    const noteKeys = Object.keys(notesRawData);
    if (!notesRawData) return;

    noteKeys.forEach((noteKey) => {
      const note = { ...notesRawData[noteKey], sync: true, isLoading: false };

      acc = { ...acc, [noteKey]: note };
    });
  } catch (error) {
    if (error.message === "Firebase: Error (auth/network-request-failed).")
      return alert("No network connection, check your network and try again");
    else alert(error.message);
  }

  return acc;

  // await setDoc(userDataRef, { full_name, created_at: date });
};

export const signUserInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error.message);
    if (error.message === "Firebase: Error (auth/user-not-found).")
      return alert("Invalid user, Create an account and sign in again");

    if (error.message === "Firebase: Error (auth/wrong-password).")
      return alert("Invalid password, check your password and try again");
    if (error.message === "Firebase: Error (auth/network-request-failed).")
      return alert("No network connection, check your network and try again");
    else return alert(error.message);
  }
};

export const signUserOut = () => {
  signOut(auth);
};

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
