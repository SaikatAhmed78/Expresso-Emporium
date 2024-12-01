import { createUserWithEmailAndPassword, } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const creatUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        user,
        loading,
        creatUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;