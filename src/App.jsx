import React from 'react';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './compinents/layer/RootLayout';
import Home from './compinents/page/Home';
import Product from './compinents/page/Product';
import SignUp from './compinents/page/SignUp';
import Login from './compinents/page/Login';
import ProductDetails from './compinents/page/ProductDetails';
import Checkout from './compinents/page/Checkout';
import About from './compinents/page/About';
import Contacts from './compinents/page/Contacts';
import MyAccount from './compinents/page/MyAccount';
import Card from './compinents/page/Card';
import Error from './compinents/page/Error';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        // errorElement={<Error/>}
      >
        <Route index element={<Home/>}/> 
        <Route path="/products" element={<Product/>}/> 
        <Route path="/sign/up" element={<SignUp/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/products/details" element={<ProductDetails/>}/> 
        <Route path="/checkout" element={<Checkout/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/contacts" element={<Contacts/>}/> 
        <Route path="/my/account" element={<MyAccount/>}/> 
        <Route path="/cart" element={<Card/>}/> 
      </Route>
    )
  );
  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
