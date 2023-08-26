import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products')
    const products = await loadedProducts.json();
    // get the stored data from local storage
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
        // find the products from data by storedCart id
        const addedProdut = products.find(pd => pd._id === id);
        // if data is available then add it to savedCart
        if (addedProdut) {
            const quantity = storedCart[id];
            addedProdut.quantity = quantity;
            savedCart.push(addedProdut);
        }
    }


    return savedCart;
}

export default cartProductsLoader;