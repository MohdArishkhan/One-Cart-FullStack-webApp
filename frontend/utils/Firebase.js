import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "onecart--login.firebaseapp.com",
  projectId: "onecart--login",
  storageBucket: "onecart--login.firebasestorage.app",
  messagingSenderId: "172783849435",
  appId: "1:172783849435:web:41989992760f511d5fa1fe"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

