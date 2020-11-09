import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/cart' component={CartPage} />
        </Switch>
    )
};

export default App;