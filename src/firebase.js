// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMDyT8_XUj0Vcuw7O63fEAbnzUabV90RU",
  authDomain: "prerana-4e6ba.firebaseapp.com",
  databaseURL: "https://prerana-4e6ba-default-rtdb.firebaseio.com",
  projectId: "prerana-4e6ba",
  storageBucket: "prerana-4e6ba.firebasestorage.app",
  messagingSenderId: "432096897749",
  appId: "1:432096897749:web:9015d65d18291985e4905c",
  measurementId: "G-JZP2SWP9YD"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
