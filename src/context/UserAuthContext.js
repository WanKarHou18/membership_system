import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../config";
import { useNavigate } from "react-router";

// third party
import { saveDataToSessionStorage } from "helper/sessionStorageHelper";
import { current } from "immer";
import { setUserEmail } from "store/actions";

//redux
import { useDispatch,useSelector } from 'react-redux';
import * as actionTypes from 'store/actions';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [user, setUser] = useState({});

  function logIn(email, password) {
    const userCredentials = signInWithEmailAndPassword(auth, email, password);
    return userCredentials;
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    // Remove user data from local storage
    localStorage.removeItem('user');
    signOut(auth);
    navigate('/');
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function resetPassword(email){
    return sendPasswordResetEmail(auth,email);
  }
  function updateUserProfile(data){
    updateProfile(auth,data).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
    });
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
  
    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn,updateUserProfile,resetPassword }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}