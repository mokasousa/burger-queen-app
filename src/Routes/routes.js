import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import { Switch, Route} from 'react-router-dom';
import Menu from '../Pages/Menu';
import Prep from '../Pages/Prep';
import OrderHistory from '../Pages/OrderHistory';
//import Auth from '../Pages/Auth'
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const Routes = () => {

    const [currUser, setCurrUser] = useState('');
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        firebase
         .auth()
         .onAuthStateChanged((user) => {
             
            if(user){
                
                setLogged(true);
                firebase
                 .firestore()
                 .collection('Users')
                 .doc(user.uid)
                 .get()
                 .then((doc) => {
                    setCurrUser(doc.data().workIn)
                })
             } else {
                
                setLogged(false);
             }
            })
    }, [])

    return (
            <Switch>
                
                {(logged && currUser === 'Salão')
                ? (<>
                    <Route path='/Menu' component={Menu} />
                    <Route path='/Pedidos' component={OrderHistory} />
                    </>)
                : (logged && currUser === 'Cozinha')
                ? (<>
                    <Route path='/Preparos' component={Prep} />
                    <Route path='/Pedidos' component={OrderHistory} />
                    </>)
                :(<>
                    <Route exact path = '/' component={Login} />
                    <Route path='/Entrar' component={Login} />
                    <Route path='/Cadastrar' component={SignUp} />
                    </>)
                }

            </Switch>
    )
}

export default Routes;
