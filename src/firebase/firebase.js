import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgA8AMZCOgmwBIAIvJApkvg98IXQG0_SM",
  authDomain: "jj-print.firebaseapp.com",
  projectId: "jj-print",
  storageBucket: "jj-print.appspot.com",
  messagingSenderId: "819149765340",
  appId: "1:819149765340:web:619975050e022f8360d219",
  measurementId: "G-WK7LGJHY1F"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };