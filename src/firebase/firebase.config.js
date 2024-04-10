// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvhyPq5eswPvAiBxQa9xfnylHej5JcAsY",
  authDomain: "dragon-news-3960f.firebaseapp.com",
  projectId: "dragon-news-3960f",
  storageBucket: "dragon-news-3960f.appspot.com",
  messagingSenderId: "504091094004",
  appId: "1:504091094004:web:3d6292e2d64d7c241aa7a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;