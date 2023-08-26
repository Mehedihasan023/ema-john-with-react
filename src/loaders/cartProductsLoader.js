import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    // get the stored data from local storage
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart)
    //console.log(ids)
    const loadedProducts = await fetch(`http://localhost:5000/productsByIds`,{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    })
    const products = await loadedProducts.json();
  
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