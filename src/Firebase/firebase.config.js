// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDf8Kvte4vwT2P1ZbrxKvPVgyQ72PrgMB4",
  // authDomain: "simple-firebase-auth-21734.firebaseapp.com",
  // projectId: "simple-firebase-auth-21734",
  // storageBucket: "simple-firebase-auth-21734.firebasestorage.app",
  // messagingSenderId: "867377163412",
  // appId: "1:867377163412:web:2231c4a197e5d1aa839881"

  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VTIE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
