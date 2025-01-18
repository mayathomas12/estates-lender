// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estates-lender.firebaseapp.com",
  projectId: "estates-lender",
  storageBucket: "estates-lender.firebasestorage.app",
  messagingSenderId: "841042814072",
  appId: "1:841042814072:web:4fe960ed07d3d0c95fb98d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);