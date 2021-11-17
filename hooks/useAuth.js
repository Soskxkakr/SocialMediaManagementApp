import React, { useState, useContext, useEffect, createContext } from 'react';
import * as Google from 'expo-google-app-auth';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from '@firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({});

const config = {
    androidClientId: "607101438555-bf0b8v52scb5cf7fm709sq1ijfcvs3l4.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    permissions: ["email", "gender", "location"],
}

export const AuthProvider = ({ children }) => {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) { setUser(user) } else { setUser(null) }
        })
    }, [])

    const signInWithGoogle = async () => {
        Google.logInAsync(config).then(async (logInResult) => {
          if (logInResult.type === 'success') {
            const { idToken, accessToken } = logInResult;
            const credential = GoogleAuthProvider.credential(idToken, accessToken);
      
            await signInWithCredential(auth, credential)
          }
          return Promise.reject();
        }).catch((error) => {setError(error)});
    }

    return (
        <AuthContext.Provider
            value={{user, signInWithGoogle}}>
        
            {children}
        </AuthContext.Provider>
    )
}

export default useAuth = () => {
    return useContext(AuthContext);
}