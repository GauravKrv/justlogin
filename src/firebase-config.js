// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnUZmbdIY2uLPZkUOjWb3CgQxXK8hzJ9c",
  authDomain: "logintry-e81a1.firebaseapp.com",
  projectId: "logintry-e81a1",
  storageBucket: "logintry-e81a1.appspot.com",
  messagingSenderId: "694040306493",
  appId: "1:694040306493:web:381395140c57a3c0bf5b54",
  measurementId: "G-72GS4JB8VV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); //wil initial the conn bw fb and our app
export const auth = getAuth(app); //says that above app will have authentication
