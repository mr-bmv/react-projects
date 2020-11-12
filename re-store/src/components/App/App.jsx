import React from 'react';
import { Route, Switch } from 'react-router-dom'

// components
import CartPage from '../pages/CartPage';
import HomePage from '../pages/HomePage';
import ShopHeader from '../ShopHeader/ShopHeader';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/cart' component={CartPage} />
            </Switch>
        </main>
    )
};

export default App;