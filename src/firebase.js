import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyCK9qa2-B5EQ4hiTpzlKjVwgmoFesba4JA",
  authDomain: "whatsapp-1a6d8.firebaseapp.com",
  projectId: "whatsapp-1a6d8",
  storageBucket: "whatsapp-1a6d8.appspot.com",
  messagingSenderId: "760350880210",
  appId: "1:760350880210:web:6a0189e400976c7019180b",
  measurementId: "G-ZPZLT6PHNH"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
