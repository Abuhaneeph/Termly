import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDPPQGrrwKAYROcTbMjKBkHPeC5Ko-KI88",
    authDomain: "termlly.firebaseapp.com",
    projectId: "termlly",
    storageBucket: "termlly.appspot.com",
    messagingSenderId: "160029690023",
    appId: "1:160029690023:web:e27f379d8c2ee85d64f382",
    measurementId: "G-1GLRF7M0CD"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

