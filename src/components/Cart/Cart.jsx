/* eslint-disable react/prop-types */
// import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import './Cart.css';
const Cart = ({ cart, handleClearCart}) => {
    // const {cart}=props
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity =0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal= totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <buuton onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
            <TrashIcon className="cart-delete-icon" />
            </buuton>
        </div>
    );
};

export default Cart;
