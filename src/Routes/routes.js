import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import { Switch, Route} from 'react-router-dom';
import Menu from '../Pages/Menu';
import Prep from '../Pages/Prep';
import OrderHistory from '../Pages/OrderHistory';
import Auth from '../Pages/Auth'
// import Login from '../Pages/Login';
// import SignUp from '../Pages/SignUp';
// import AuthFirebase from '../Components/Auth';
//import PrivateRoute from '../Components/PrivateRoute'

const Routes = () => {

    const [currUser, setCurrUser] = useState('');
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        firebase
         .auth()
         .onAuthStateChanged((user) => {
             if(user){
                console.log(user.uid + 'logged')
                setLogged(true);
                firebase
                 .firestore()
                 .collection('Users')
                 .doc(user.uid)
                 .get()
                 .then((doc) => {
                    // console.log('trabalha no '+doc.data().workIn)
                    setCurrUser(doc.data().workIn)
                })
             } else {
                console.log('nobody is logged')
                setLogged(false);
             }
             //console.log(user.uid)
            })
    }, [])

    // console.log(currUser)

    // const isWaiterOrCooker = () => {
        
    //     if(currUser === 'Salão') {
    //         return (
    //             <>
    //             <Route path='/Menu' component={Menu} />
    //             <Route path='/Pedidos' component={OrderHistory} />
    //             </>
    //         )
    //     }else if (currUser === 'Cozinha') {
    //         return (
    //             <>
    //             <Route path='/Preparos' component={Prep} />
    //             <Route path='/Pedidos' component={OrderHistory} />
    //             </>
    //         )
    //     }
    // }

    return (
        // <AuthFirebase>
            <Switch>

                {/* <PrivateRoute path='/Menu' component={Menu} />
                <PrivateRoute path='/Preparos' component={Prep} />
                <PrivateRoute path='/Pedidos' component={OrderHistory} /> */}
                
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
                    <Route exact path = '/' component={Auth} />
                    <Route path='/Entrar' component={Auth} />
                    <Route path='/Cadastrar' component={Auth} />
                    </>)
                }
                

                {/* <Route exact path = '/' component={Login} />
                <Route path='/Entrar' component={Login} />
                <Route path='/Cadastrar' component={SignUp} />  */}
            </Switch>
        // </AuthFirebase>
    )
}

export default Routes