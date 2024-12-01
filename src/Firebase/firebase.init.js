import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDeW3sCeVGTAf_4_rWCx8s4O1OcAoFZ22Y",
  authDomain: "coffee-store-bee35.firebaseapp.com",
  projectId: "coffee-store-bee35",
  storageBucket: "coffee-store-bee35.firebasestorage.app",
  messagingSenderId: "222167227674",
  appId: "1:222167227674:web:0f304b23bf5d72cd94a0a3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);