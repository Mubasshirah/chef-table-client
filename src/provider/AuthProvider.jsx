import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null);
const auth=getAuth(app);
const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider();
const gitHubProvider= new GithubAuthProvider();
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
            console.log(loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    })
    const logInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logInWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider);
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOutUser=()=>{
        setLoading(true);
        return signOut(auth);
    }
    const authInfo={
     createUser,
     signInUser,
     logOutUser,
     user,
     loading,
     logInWithGoogle,
     logInWithGithub
    } 
    return (
        <AuthContext.Provider value={authInfo}>
               {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;