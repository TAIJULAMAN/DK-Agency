
// import {GoogleAuthProvider, onAuthStateChanged,  signInWithPopup, updateProfile} from "firebase/auth";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../config.firebase";
import axios from "axios";

export const AuthContext =createContext(null);
const auth = getAuth(app);
const Authproviders = ({ children }) => {
  const [user,setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };



  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (email) => {
    return updateProfile(auth.currentUser, {
      email: email,
    });
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
       if(currentUser){
           axios.post('http://localhost:5000/jwt', {email: currentUser.email})
           .then(data =>{
               console.log(data.data.token)
               localStorage.setItem('access-token', data.data.token)
               setLoading(false);
           })
       }
      //  else{
      //      localStorage.removeItem('access-token')
      //  }

    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile
  };

  return (
    <AuthContext.Provider  value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authproviders;
