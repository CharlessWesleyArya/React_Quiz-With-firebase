/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBa3pKGYGt57l2FeErv9nlj1T1e-Zo86s",
  authDomain: "new-react-quiz-41c0a.firebaseapp.com",
  projectId: "new-react-quiz-41c0a",
  storageBucket: "new-react-quiz-41c0a.appspot.com",
  messagingSenderId: "201269642267",
  appId: "1:201269642267:web:7e812d3a8bbd37c5de64be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */
// this is the configuration given by Firebase Authentication and will be availabe in the Project Settings/Config
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCBa3pKGYGt57l2FeErv9nlj1T1e-Zo86s",
  authDomain: "new-react-quiz-41c0a.firebaseapp.com",
  projectId: "new-react-quiz-41c0a",
  storageBucket: "new-react-quiz-41c0a.appspot.com",
  messagingSenderId: "201269642267",
  appId: "1:201269642267:web:7e812d3a8bbd37c5de64be",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
