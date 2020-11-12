import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './ShopHeader.css'

const ShopHeader = ({ cartItems, totalPrice }) => {

    const countItem = () => {
        return cartItems.reduce((prevTotal, item) => {
            return item.count + prevTotal
        }, 0)
    };

    return (
        <header className="shop-header row">
            <Link to="/">
                <div className="logo text-dark" href="#">ReStore</div>
            </Link>
            <Link to="/cart">
                <div className="shopping-cart">
                    <i className="cart-icon fa fa-shopping-cart" />
                    {countItem()} items (${totalPrice})
            </div>
            </Link>
        </header>
    );
};

const mapStateToProps = ({ shoppingCart: { totalPrice, cartItems } }) => {
    return {
        totalPrice,
        cartItems
    }
};



export default connect(mapStateToProps)(ShopHeader)