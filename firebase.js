import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBVBBy9KHDQbMdhjB-iRHtX8KE1e4E6xDc",
    authDomain: "my-shulee.firebaseapp.com",
    projectId: "my-shulee",
    storageBucket: "my-shulee.appspot.com",
    messagingSenderId: "1045486914024",
    appId: "1:1045486914024:web:3b5e5b09ee6d91e9617c5d",
    measurementId: "G-B6M8BNZDWB"
    };

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export the Firestore instance
export const firestore = firebase.firestore();
