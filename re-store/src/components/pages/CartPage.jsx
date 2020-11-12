import React from 'react';
import ShoppingCartTable from '../ShoppingCartTable/ShoppingCartTable';

const CartPage = () => {
  return (
    <React.Fragment>
      <ShoppingCartTable />
      <button className='btn btn-danger btn-md'>Buy</button>
    </React.Fragment>
  )
};

export default CartPage;