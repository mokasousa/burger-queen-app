import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import { Switch, Route} from 'react-router-dom';
import Menu from '../Pages/Menu';
import Prep from '../Pages/Prep';
import OrderHistory from '../Pages/OrderHistory';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
// import AuthFirebase from '../Components/Auth';
//import PrivateRoute from '../Components/PrivateRoute'

const Routes = () => {

    const [currUser, setCurrUser] = useState('');
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        firebase
         .auth()
         .onAuthStateChanged((user) => {
             console.log(user)
             if(user){
                setLogged(true);
                firebase
                 .firestore()
                 .collection('Users')
                 .doc(user.uid)
                 .get()
                 .then((doc) => {
                    console.log(doc.data().workIn)
                })
             } else {
                setLogged(false);
             }
             //console.log(user.uid)
            })
    }, [])

    // console.log(currUser)

    return (
        // <AuthFirebase>
            <Switch>
                <Route exact path = '/' component={Menu} />
                {/* {teste ? ( */}
                    <>
                    <Route path='/Menu' component={Menu} />
                    <Route path='/Preparos' component={Prep} />
                    <Route path='/Pedidos' component={OrderHistory} />
                    </>

                {/* ): console.log("Deu errafo") } */}
                

                {/* <PrivateRoute path='/Menu' component={Menu} />
                <PrivateRoute path='/Preparos' component={Prep} />
                <PrivateRoute path='/Pedidos' component={OrderHistory} /> */}

                {/* <Route exact path = '/' component={Login} />*/}
                <Route path='/Entrar' component={Login} />
                <Route path='/Cadastrar' component={SignUp} /> 
            </Switch>
        // </AuthFirebase>
    )
}

export default Routes