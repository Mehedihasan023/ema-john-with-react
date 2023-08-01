// import React from 'react';
import './Product.css';
import PropTypes from 'prop-types';
const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    return (
        <div className='product'>
             <img src={img} alt="" />
            <div className="product-info">
                <h6 className="product-name">{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
              <button className="btn-cart">
                Add to Cart
              </button>
        </div>
    );
};
Product.propTypes = {
    product: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        seller: PropTypes.string.isRequired,
        ratings: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default Product;