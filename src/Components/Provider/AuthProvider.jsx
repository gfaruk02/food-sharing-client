import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import axios from "axios";

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
    // const logOut=()=>{
    //     setLoading(true);
    //     return signOut(auth)
    // }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, (currentUser)=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser);
            // console.log('current user', currentUser);
            setLoading(false);
            if(currentUser){
                
                axios.post('https://assignment-11-7-food-sharing-server.vercel.app/jwt',loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token res',res.data);
                })
            }
            else{
                axios.post('https://assignment-11-7-food-sharing-server.vercel.app/logOut',loggedUser, {withCredentials: true})
                .then(res=>{
                    console.log('token response', res.data);
                })
            }
        })
        return ()=>{
         return unSubscribe();
        }
    },[ user?.email])




    const authValues = {
        user,
        loading,
        signUpUser,
        signInUser,
        gooleSignIn,
        logOut
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