// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestrore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcYHlfb8bZiAVz0NpBl2K2L89J0vbOUBE",
  authDomain: "coder-react-61802.firebaseapp.com",
  projectId: "coder-react-61802",
  storageBucket: "coder-react-61802.appspot.com",
  messagingSenderId: "1004454668252",
  appId: "1:1004454668252:web:d21ba59291f8c7295f5119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)