import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const providerGoogle = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    // active check
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("active", currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () =>{
            unSubscribe();
        }
    },[])
    // register
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    //login with google
    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, providerGoogle)
    }

    //log out
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const authInfo = {user, logOut, createUser, loginUser, loginWithGoogle}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;