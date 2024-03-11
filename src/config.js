
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// ==============================|| THEME CONSTANT  ||============================== //

export const gridSpacing = 3;
export const drawerWidth = 280;

// ==============================|| THEME CONFIG  ||============================== //

// ==============================|| STRING CONSTANT  ||============================== //
export const websiteTitle = "FRENZ"

// ==============================|| FIREBASE CONSTANT  ||============================== //

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJK6WgwSYE_Uhj7gnzEchdmJmHscaB71g",
  authDomain: "frenz-platform.firebaseapp.com",
  projectId: "frenz-platform",
  storageBucket: "frenz-platform.appspot.com",
  messagingSenderId: "385287484939",
  appId: "1:385287484939:web:ad2b1e7e0dc871dc08f90e",
  measurementId: "G-EM5MZEPEQH"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);