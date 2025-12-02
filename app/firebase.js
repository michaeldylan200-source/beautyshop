import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhkpoM-7_Ns_YTWkDSw-8xWKkAUw6N0PE",
  authDomain: "adani-beauty-and-wellness.firebaseapp.com",
  databaseURL: "https://adani-beauty-and-wellness-default-rtdb.firebaseio.com",
  projectId: "adani-beauty-and-wellness",
  storageBucket: "adani-beauty-and-wellness.firebasestorage.app",
  messagingSenderId: "211419892764",
  appId: "1:211419892764:web:b5648ce96e7856720163d9"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);