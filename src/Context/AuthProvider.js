import React, { createContext, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.config';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)





const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const createUser = (email, password) =>{
       setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
       setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = (auth) =>{
        setLoading(true)
      return  signInWithPopup(auth)
    }

    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth, currentUser=>{
            console.log('User Observing');
            setUser(currentUser);
            setLoading(false);

        });

        return ()=> unsubscribe();
    },[])

  
    
    const updateUser = (userInfo) =>{
        return updateProfile(user, userInfo)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }




    const authInfo = {
        createUser,
        signIn,
        user,
        logOut,
        googleSignIn,
        updateUser,
        loading
        

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;