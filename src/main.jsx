import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// eslint-disable-next-line no-unused-vars
import App from './App';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/Layout/Home.jsx';
import Orders from './components/Orders/Orders.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import Signup from './components/SignUp/Signup';
import AuthProvider from './components/providers/AuthProvider';
import PrivateRoute from './components/routes/Privateroute';

const router = createBrowserRouter([{
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <Shop></Shop>
    },
    {
      path: 'orders',
      element: <Orders></Orders>,
      loader: cartProductsLoader
    },
    {
      path: 'inventory',
      element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
    },
    {
      path: '/checkout',
      element: <PrivateRoute><Checkout></Checkout></PrivateRoute>

    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'signup',
      element: <Signup></Signup>
    }
  ]
}])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
