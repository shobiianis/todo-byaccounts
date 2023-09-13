import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
  //shoaibwork20000 firebase console latest zenkoders todo


const firebaseConfig = {
  apiKey: "AIzaSyB3sE5Rb4c1pua2yGXCaefEz3RMW7VM8r4",
  authDomain: "latest-zenkoders-todo.firebaseapp.com",
  projectId: "latest-zenkoders-todo",
  storageBucket: "latest-zenkoders-todo.appspot.com",
  messagingSenderId: "867453629246",
  appId: "1:867453629246:web:7776592479300605c3726f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
