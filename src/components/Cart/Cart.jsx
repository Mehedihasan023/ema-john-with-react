// import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
const Cart = ({ cart }) => {
    // const {cart}=props
    let totalPrice = 0;
    let totalShipping = 0;

    for (const product of cart) {
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal= totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
};


export default Cart;
