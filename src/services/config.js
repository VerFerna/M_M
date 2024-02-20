import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyAXiUL-mr9Cvm57pRsXc-ahn8Gj9zDX_l0",
  authDomain: "margarita-maia.firebaseapp.com",
  projectId: "margarita-maia",
  storageBucket: "margarita-maia.appspot.com",
  messagingSenderId: "864141137871",
  appId: "1:864141137871:web:9042ea8d01d3146b19a4ba"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);