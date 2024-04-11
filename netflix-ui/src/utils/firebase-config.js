import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0B97UHoiQ123bC5fM3PQIpd-_HIwjpaY",
  authDomain: "my-netflix-clone-27051.firebaseapp.com",
  projectId: "my-netflix-clone-27051",
  storageBucket: "my-netflix-clone-27051.appspot.com",
  messagingSenderId: "757835901423",
  appId: "1:757835901423:web:c680d7b057e9a041f4ae1a",
  measurementId: "G-MGZC3LGY3F"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);