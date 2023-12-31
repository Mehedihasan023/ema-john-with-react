/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config'


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setuser] =useState(null);

    const [loading, setLoading] = useState(true);

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    // observer user auth state
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setuser(currentUser);
            setLoading(false);
        });
        // stop observing while unmounting
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;