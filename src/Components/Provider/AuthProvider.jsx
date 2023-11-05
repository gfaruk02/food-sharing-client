import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const signUpUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const gooleSignIn = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const signOutUser=()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (currentUser)=>{
            console.log('manage currenUser', currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
         return unSubscribe();
        }
    },[])




    const authValues = {
        user,
        loading,
        signUpUser,
        signInUser,
        gooleSignIn,
        signOutUser
    }
    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}