import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserContext from './Context/UserContext';
import ConfirmPass from './pages/Auth/ConfirmPass';
import Login from './pages/Auth/Login';
import ResetPass from './pages/Auth/ResetPass';
import SignUp from './pages/Auth/SignUp';
import Checkout from './pages/Checkout';
import DetailProduct from './pages/DetailProduct';
import HomePage from './pages/Home';
import MyBag from './pages/MyBag';
import ShippAddres from './pages/Profile/ShippAddress'
import RequireAuth from './components/RequireAuth/RequireAuth';
import Profile from './pages/Profile';
import Order from './pages/Profile/Order';
import ConfirmLog from './pages/Auth/ConfirmLog';
import CategoryPage from './pages/CategoryPage';


function App() {
  return (
    <UserContext>
    <BrowserRouter>
      <Routes>

        <Route path="/detail-product/:id" element={<RequireAuth><DetailProduct/></RequireAuth>}/>
        {/* <Route path="/my-bag" element={<RequireAuth><MyBag/></RequireAuth>}/> */}
        <Route path="/my-bag" element={<MyBag/>}/>
        <Route path="/checkout" element={<RequireAuth><Checkout/></RequireAuth>}/>
        {/* <Route path="/" element={<RequireAuth><HomePage/></RequireAuth>}/> */}
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/category" element={<CategoryPage/>}/>


        <Route path="/profile" element={<Profile/>}/>
        <Route path="/Shipping-Addres" element={<RequireAuth> <ShippAddres/> </RequireAuth>}/>
        <Route path="/My-Order" element={<RequireAuth><Order/></RequireAuth>}/>


        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPass/>}/>
        <Route path="/confirmation-password" element={<ConfirmPass/>}/>
        <Route path="/confirmation-password-login" element={<ConfirmLog/>}/>
      </Routes>
    </BrowserRouter>
    </UserContext>
    );
}

export default App;
