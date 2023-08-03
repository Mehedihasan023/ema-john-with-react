/* eslint-disable react/prop-types */
// import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import './Product.css';
const Product = (props) => {
    const { img, name, seller, ratings, price, } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className="product-name">{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className="btn-cart">
                Add to Cart
                <ShoppingCartIcon className="cart-icon" />
            </button>
        </div>
    );
};

export default Product;