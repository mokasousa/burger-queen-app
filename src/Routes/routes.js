import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from '../Pages/Menu';
import Prep from '../Pages/Prep';
import OrderHistory from '../Pages/OrderHistory';

const Routes = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route exact path = '/'><Menu /></Route>
                    <Route path='/menu'><Menu /></Route>
                    <Route path='/preparos'><Prep /></Route>
                    <Route path='/lista-de-pedidos'><OrderHistory /></Route>
                </Switch>

        </BrowserRouter>
    )
}

export default Routes