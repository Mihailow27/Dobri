// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrvi4o988rVajzqtUo3E-UBjc1u4IostY",
  authDomain: "unwe-project.firebaseapp.com",
  projectId: "unwe-project",
  storageBucket: "unwe-project.appspot.com",
  messagingSenderId: "739009949934",
  appId: "1:739009949934:web:cec11006b8671013d403ff",
  measurementId: "G-BL16DT4F0J",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
