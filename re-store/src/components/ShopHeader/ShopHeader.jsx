import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './ShopHeader.css'

const ShopHeader = ({ numItems, totalPrice }) => {
    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark" href="#">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {numItems} items (${totalPrice})
            </div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({ shoppingCart: { totalPrice } }) => {
    return {
        totalPrice
    }
};



export default connect(mapStateToProps)(ShopHeader)