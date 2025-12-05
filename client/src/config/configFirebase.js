// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "blogapp-fb719.firebaseapp.com",
  projectId: "blogapp-fb719",
  storageBucket: "blogapp-fb719.firebasestorage.app",
  messagingSenderId: "350248758232",
  appId: "1:350248758232:web:c42bb2274fe6deb65720ad",
  measurementId: "G-JZZZG4NLDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}
// const analytics = getAnalytics(app);