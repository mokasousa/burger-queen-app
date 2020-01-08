import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Menu from '../Pages/Menu';
import Prep from '../Pages/Prep';
import OrderHistory from '../Pages/OrderHistory';

const Routes = () => {
    return (
            <Switch>
                <Route exact path = '/' component={Menu} />
                <Route path='/Menu' component={Menu} />
                <Route path='/Preparos' component={Prep} />
                <Route path='/Pedidos' component={OrderHistory} />
            </Switch>
    )
}

export default Routes