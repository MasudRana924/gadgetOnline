import React from 'react';
import { createContext } from 'react';
import FirebaseUse from '../Hooks/FirebaseUse';
export const authContext = createContext()

const AuthProvider = (props) => {
    const { children } = props
    const allText=FirebaseUse()
    return (
        <authContext.Provider value={allText}>
        {children}
    </authContext.Provider>
    );
};

export default AuthProvider;