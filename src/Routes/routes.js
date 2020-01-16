import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';
import { Switch, Route} from 'react-router-dom';
import Menu from '../Pages/Menu';
import Prep from '../Pages/Prep';
import OrderHistory from '../Pages/OrderHistory';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { UserContext, OrdersContext } from '../Components/UserContext'

const Routes = () => {

    const [currUser, setCurrUser] = useState('');
    const [logged, setLogged] = useState(false);
    const [ordersHistory, setOrdersHistory] = useState([]);
    
    useEffect(() => {
        firebase
         .auth()
         .onAuthStateChanged((user) => {
            if(user){
                console.log(user.displayName)
                setLogged(true);
                firebase
                 .firestore()
                 .collection('Users')
                 .doc(user.uid)
                 .get()
                 .then((doc) => {
                    const role = doc.data();
                    setCurrUser(role)
                }).catch((error) => console.log(error));

            } else {
                
                setLogged(false);
             }
            })
    }, [])

    useEffect(() => {
        firebase
            .firestore()
            .collection('Orders')
            .orderBy('ordenate', 'asc')
            .orderBy('timeOfOrder', 'asc')
            .onSnapshot((snapshot) => {
                let itensOrders = [];
                snapshot.docs.forEach(item => itensOrders.push({...item.data(), id:item.id}))
                setOrdersHistory(itensOrders);
            })
    }, [])

    return (
            <Switch>
                
                {(logged && currUser.workIn === 'Salão')
                ? (<>
                    <UserContext.Provider value={currUser}>
                        <OrdersContext.Provider value={ordersHistory}>
                            <Header />
                            <Route path='/Pedidos' component={OrderHistory} />
                        </OrdersContext.Provider>
                        <Route path='/Menu' component={Menu} />
                        <Footer />
                    </UserContext.Provider>
                    </>)
                : (logged && currUser.workIn === 'Cozinha')
                ? (<>
                    <UserContext.Provider value={currUser}>
                        <OrdersContext.Provider value={ordersHistory}>
                            <Header />
                            <Route path='/Pedidos' component={OrderHistory} />
                            <Route path='/Preparos' component={Prep} />
                        </OrdersContext.Provider>
                        <Footer />
                    </UserContext.Provider>
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
