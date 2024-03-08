
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
  apiKey: "AIzaSyDR_lrYX8Yb1z42wauhlvdHwwTiOs0w_lk",
  authDomain: "burger-shop-fc2b7.firebaseapp.com",
  projectId: "burger-shop-fc2b7",
  storageBucket: "burger-shop-fc2b7.appspot.com",
  messagingSenderId: "1039617321690",
  appId: "1:1039617321690:web:583f4bb4a6fab7de41d3e3",
  measurementId: "G-LSNJXKDSZK"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);