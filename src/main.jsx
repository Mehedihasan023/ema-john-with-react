import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// eslint-disable-next-line no-unused-vars
import App from './App';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([{
  path:'/',
  element:<Home></Home>,
  children:[
    {
      path:'/',
      element:<Shop></Shop>
    },
    {
      path:'orders',
      element:<Orders></Orders>,
      loader:cartProductsLoader
    },
    {
      path:'inventory',
      element:<Inventory></Inventory>
    },
    {
      path:'/checkout',
      element:<Checkout></Checkout>

    },
    {
      path:'login',
      element:<Login></Login>
    }
  ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
