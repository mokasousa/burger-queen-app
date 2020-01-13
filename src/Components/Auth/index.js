import React, { useState, useEffect } from 'react';
import firebase from '../../config/firebase.js';

const AuthFirebase = ({children}) => {

    const [currUser, setCurrUser] = useState(null);

    useEffect(() => {
        firebase
         .auth()
         .onAuthStateChanged(setCurrUser)
    }, [])

    return(

        <AuthContext.Provider value={currUser}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthFirebase