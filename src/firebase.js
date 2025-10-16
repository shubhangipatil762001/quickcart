// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAocIonmKXnGxIfQDbY9QGoliz_iQ-lq-4",
  authDomain: "prerana-2f48c.firebaseapp.com",
  databaseURL: "https://prerana-2f48c-default-rtdb.firebaseio.com",
  projectId: "prerana-2f48c",
  storageBucket: "prerana-2f48c.firebasestorage.app",
  messagingSenderId: "297741036929",
  appId: "1:297741036929:web:6c1c8a319d9cb232e5cc80",
  measurementId: "G-NNQ8G0M5QV"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize services
export const auth = getAuth(app);
export const database = getDatabase(app);
