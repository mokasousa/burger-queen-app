import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthFirebase from '../Auth'

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const currUser = useContext(AuthFirebase)

    return(
        <Route
        {...rest}
        render={
            routeProps => 
            !!currUser
            ? (<RouteComponent {...routeProps}/>)
            : (<Redirect to='/Login' />)
        }
        />
    )
}

export default PrivateRoute;