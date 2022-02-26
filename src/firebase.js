// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJyByr_tHDyCpgDwTGxHceRvMuY3fPtD4",
    authDomain: "todolist-d615d.firebaseapp.com",
    projectId: "todolist-d615d",
    storageBucket: "todolist-d615d.appspot.com",
    messagingSenderId: "803607449790",
    appId: "1:803607449790:web:425f802f18123747ba8eef"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();