// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
//import firebase from 'firebase/compat/app';
//import  'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHSaUh9yrzgZCHrW8vrCihO_uDZPf1Ym8",
  authDomain: "uber-next-clone-167b8.firebaseapp.com",
  projectId: "uber-next-clone-167b8",
  storageBucket: "uber-next-clone-167b8.appspot.com",
  messagingSenderId: "607133790782",
  appId: "1:607133790782:web:ea9386e661e54927c7d76f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }