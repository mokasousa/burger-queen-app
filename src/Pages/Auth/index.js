import React from 'react';
import Login from '../../Components/Login';
import SignUp from '../../Components/SignUp';

const Auth = () => {

    const pathname = window.location.pathname;

    return(
        <>  
        {pathname === '/Cadastrar'
        ? <SignUp />
        : <Login />}
        </>
    )
}

export default Auth;
