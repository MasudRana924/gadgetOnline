import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from './usefirebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut,getIdToken } from "firebase/auth";

initializeAuthentication()

const FirebaseUse = () => {
    const [user, setUser] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)


    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                .then(idToken=>console.log(idToken))
                setUser(user)
            }
            setIsLoading(false)

        })
    }, [])
    //   logout 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() =>
                setIsLoading(false)
            )
    }

    return {
        user, googleSignIn, logOut,
        isLoading, setIsLoading
    }
};

export default FirebaseUse;