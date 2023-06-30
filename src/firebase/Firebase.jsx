import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBt2MvQ2CoApL9Ee_j3udJpt5u4Gub5SIE",
    authDomain: "login-b2d45.firebaseapp.com",
    databaseURL: "https://login-b2d45.firebaseio.com",
    projectId: "login-b2d45",
    storageBucket: "login-b2d45.appspot.com",
    messagingSenderId: "853861986607",
    appId: "1:853861986607:web:5914a354e269570ca771da"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);