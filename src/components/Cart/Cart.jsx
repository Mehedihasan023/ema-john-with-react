// import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const {cart}=props
    return (
        <div className='cart'>
            <h2>orders </h2>
                <p>{cart.length}</p>
        </div>
    );
};

export default Cart;
