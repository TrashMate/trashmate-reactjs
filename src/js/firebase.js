import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyDbCaoy8BvM4KNfCQlihr1V_ECSV2zAu1U",
  authDomain: "trashmate-a7b96.firebaseapp.com",
  databaseURL: "https://trashmate-a7b96.firebaseio.com",
  projectId: "trashmate-a7b96",
  storageBucket: "trashmate-a7b96.appspot.com",
  messagingSenderId: "245505286948",
  appId: "1:245505286948:web:403370400b17db292549b1",
  measurementId: "G-JBM2NLEXVF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
