import { createContext, useState } from "react";
import { auth } from "../firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    onAuthStateChanged(auth, currentUser=>{
        if(currentUser){
            setUser(currentUser)
            console.log(currentUser)
        }else{
            setUser(null)
            console.log('user in null')
        }
    } )

    const authInfo ={
        user,
        createUser,
        signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;