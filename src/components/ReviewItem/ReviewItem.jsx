/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid';
import './ReviewItem.css'
const ReviewItem = ({ product,handleRemoveFromCart }) => {
    const { _id, img, price, name, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
                <p></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(_id)} className='btn-delete'><TrashIcon className="delete-icon" /> </button>
        </div>
    );
};
 
export default ReviewItem;