import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser =()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscriber = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return (()=>{
            unSubscriber();
        })
    },[])



    const authInfo ={
        user,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;