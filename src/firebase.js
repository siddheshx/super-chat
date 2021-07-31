import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBdtZH7AZn-hqU-gzrj2dweOl2QfuGur4Y",
    authDomain: "super-chat-635c8.firebaseapp.com",
    projectId: "super-chat-635c8",
    storageBucket: "super-chat-635c8.appspot.com",
    messagingSenderId: "652098363058",
    appId: "1:652098363058:web:1516ceff191c4560d873ab"
}).auth();