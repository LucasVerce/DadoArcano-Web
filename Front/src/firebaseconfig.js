// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBJiuXyRevYlvsgFhl3RJApkNiHOgezBk",
  authDomain: "dadoarcano-84a94.firebaseapp.com",
  projectId: "dadoarcano-84a94",
  storageBucket: "dadoarcano-84a94.appspot.com",
  messagingSenderId: "756156024306",
  appId: "1:756156024306:web:85401c02aaaed8ae56976b",
  measurementId: "G-YK3QB3EVN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

