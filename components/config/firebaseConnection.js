import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAzwSfoqLfCPjOgHqTq25wYPuc5R4Rouq0",
  authDomain: "firereact-79143.firebaseapp.com",
  projectId: "firereact-79143",
  storageBucket: "firereact-79143.appspot.com",
  messagingSenderId: "475955756160",
  appId: "1:475955756160:web:dcf948e22867f0138bfa65",
  measurementId: "G-9B3ZGH6J62"
};

if(!firebase.app.length == 0) {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;