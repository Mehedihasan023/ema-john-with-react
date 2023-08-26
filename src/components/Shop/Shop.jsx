// import React from 'react';
import { useState } from 'react';
import './Shop.css';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [cart, setCart] = useState([]);
    const { totalProducts } = useLoaderData();

    /*for pagination
      1. Determine the total number of items 
      2. Decide on the number of items per page
      3. Calculate the total number of pages
      4. Determine the current page
    */

    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()]

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setProducts(data);
        }
        fetchData();

    }, [currentPage, itemsPerPage])


    useEffect(() => {
        const storedCart = getShoppingCart();
        const ids = Object.keys(storedCart);

        fetch(`http://localhost:5000/productsByIds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(cartProducts => {

                const savedCart = [];
                // get id 
                for (const id in storedCart) {
                    // find product by using id
                    const addedProduct = cartProducts.find(product => product._id === id);
                    if (addedProduct) {
                        // get quantity
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                        console.log();
                    }

                }
                // set the cart
                setCart(savedCart);
            })

    }, []);

    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd._id === product._id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product._id);
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    // options to select items perpage
    const options = [5, 10, 15, 20]
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value))
        setCurrentPage(0)
    }

    return (
        <>
            <div className='shop-container'>

                <div className="products-container">
                    {
                        products.map(product =>
                            <Product
                                key={product._id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                            ></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart
                        cart={cart}
                        handleClearCart={handleClearCart}
                    >
                        <Link className='proceed-link' to='/orders'>
                            <button className='btn-proceed'>Review Order
                                <ArrowSmallRightIcon className="cart-delete-icon" />
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
            {/* pagination system */}
            <div className="pagination">
                <p>current page: {currentPage} and items per page: {itemsPerPage}</p>
                {
                    pageNumbers.map(number => <button
                        key={number}
                        className={currentPage === number ? 'selected' : ''}
                        onClick={() => setCurrentPage(number)}
                    >{number}</button>)
                }

                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (

                        <option key={option} value={option} >
                            {option}
                        </option>
                    ))}
                </select>

            </div>
        </>
    );
};

export default Shop;