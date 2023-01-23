import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDloddW8ptP5fRoQAkfVYCdqx7ge5yuS_s",
  authDomain: "tictactoe-77ac4.firebaseapp.com",
  projectId: "tictactoe-77ac4",
  storageBucket: "tictactoe-77ac4.appspot.com",
  messagingSenderId: "705359544582",
  appId: "1:705359544582:web:f1e18d6065a3138e7fde87",
  measurementId: "G-M57FQYGSPY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
