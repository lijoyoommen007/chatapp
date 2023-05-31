import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAfJ66H70RVwBQrZi66l_5uN6UaTKAA9MI",
  authDomain: "chat-89007.firebaseapp.com",
  projectId: "chat-89007",
  storageBucket: "chat-89007.appspot.com",
  messagingSenderId: "212968111517",
  appId: "1:212968111517:web:478bf66036f32fbf7f0374"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth()

export const storage = getStorage();

export const db = getFirestore()