import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getDatabase,
  ref,
  push
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBM9xvMjo3w6nlbNXBSRT_UT3cdgzy2eEc",
  authDomain: "calculadora-imc-fd706.firebaseapp.com",
  databaseURL: "https://calculadora-imc-fd706-default-rtdb.firebaseio.com",
  projectId: "calculadora-imc-fd706",
  storageBucket: "calculadora-imc-fd706.firebasestorage.app",
  messagingSenderId: "127307779547",
  appId: "1:127307779547:web:f112488a2b27b2e4862bfe",
  measurementId: "G-WY1R0BCK2S"
};

const app =
initializeApp(firebaseConfig);

const database =
getDatabase(app);

export {
  database,
  ref,
  push
};