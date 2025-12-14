import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Loading from '../components/Loading';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
     const googleProvider = new GoogleAuthProvider()
    const creatUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateUser = (userObj)=>{
        return updateProfile(auth.currentUser,userObj)
    }
        // google login 
    const loginWithGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const logOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        // console.log(currentUser)
        setLoading(false)
     })
    
      return unsubscribe
    }, [])
    
    const value = {
        creatUser,
        logOutUser,
        user,
        loading,
        setLoading,
        loginUser,
        updateUser,
        loginWithGoogle
    }
    return <AuthContext value={value} >
        {loading?<Loading/>:children}
    </AuthContext>
};

export default AuthProvider;