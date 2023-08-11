// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDUTSeqSZ6MEEXy-jP1EwV5Y8d4QqcEZyg",
    authDomain: "ema-john-with-firebase-a-57f7b.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-57f7b",
    storageBucket: "ema-john-with-firebase-a-57f7b.appspot.com",
    messagingSenderId: "509977404960",
    appId: "1:509977404960:web:4d6f9ca0dfe6820a1abe45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;