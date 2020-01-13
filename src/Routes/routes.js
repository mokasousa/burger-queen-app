import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Menu from '../Pages/Menu';
import Prep from '../Pages/Prep';
import OrderHistory from '../Pages/OrderHistory';
import AuthFirebase from '../Components/Auth';
// import Login from '../Pages/Login';
// import SignUp from '../Pages/SignUp';
// import AuthFirebase from '../Components/Auth';
//import PrivateRoute from '../Components/PrivateRoute'

const Routes = () => {
    return (
        // <AuthFirebase>
            <Switch>
                <Route exact path = '/' component={Menu} />
                <Route path='/Menu' component={Menu} />
                <Route path='/Preparos' component={Prep} />
                <Route path='/Pedidos' component={OrderHistory} />

                {/* <PrivateRoute path='/Menu' component={Menu} />
                <PrivateRoute path='/Preparos' component={Prep} />
                <PrivateRoute path='/Pedidos' component={OrderHistory} /> */}

                {/* <Route exact path = '/' component={Login} />
                <Route path='/Entrar' component={Login} />
                <Route path='/Cadastrar' component={SignUp} /> */}
            </Switch>
        // </AuthFirebase>
    )
}

export default Routes