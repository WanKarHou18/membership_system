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

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const navigate = useNavigate()
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    signOut(auth);
    navigate('/landing-page');
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
      // An error occurred
      // ...
      console.log('updateProfileError',error)
    });
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
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