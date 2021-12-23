// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjT6iZ93Z4lfecsD6MANIH4RrWRJgJRmE",
  authDomain: "context-auth-709c0.firebaseapp.com",
  projectId: "context-auth-709c0",
  storageBucket: "context-auth-709c0.appspot.com",
  messagingSenderId: "265609790285",
  appId: "1:265609790285:web:e461d142039cedf5cc2d04",
  measurementId: "G-SBVXPP10RE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export default app;
