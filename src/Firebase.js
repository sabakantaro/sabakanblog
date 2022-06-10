import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEChEt4zeo_bZA56WqyBYYmy8AEcGZ2uU",
  authDomain: "sabakanblog-af298.firebaseapp.com",
  projectId: "sabakanblog-af298",
  storageBucket: "sabakanblog-af298.appspot.com",
  messagingSenderId: "516813037006",
  appId: "1:516813037006:web:a0d124f1afc237a876df9f",
  measurementId: "G-VX7FWRYJ4X",
};

firebase.initializeApp(firebaseConfig);

export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
export default firebase;
