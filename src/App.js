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
import PublicRoute from './components/PublicRoute';
import OrderDetails from './pages/Profile/OrderDetails';


function App() {
  return (
    <UserContext>
    <BrowserRouter>
      <Routes>
        {/* No Need Login */}
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/detail-product/:id" element={<DetailProduct/>}/>

        {/* Must Login */}
        <Route path="/my-bag" element={<RequireAuth><MyBag/></RequireAuth>}/>
        <Route path="/checkout" element={<RequireAuth><Checkout/></RequireAuth>}/>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="/Shipping-Addres" element={<RequireAuth> <ShippAddres/> </RequireAuth>}/>
        <Route path="/My-Order" element={<RequireAuth><Order/></RequireAuth>}/>
        <Route path="/My-Order/:id" element={<RequireAuth><OrderDetails/></RequireAuth>}/>


        {/* Public Route, Must Logout */}
        <Route path="/signup" element={<PublicRoute><SignUp/></PublicRoute>}/>
        <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path="/reset-password" element={<PublicRoute><ResetPass/></PublicRoute>}/>
        <Route path="/confirmation-password" element={<PublicRoute><ConfirmPass/></PublicRoute>}/>
        <Route path="/confirmation-password-login" element={<PublicRoute><ConfirmLog/></PublicRoute>}/>
      </Routes>
    </BrowserRouter>
    </UserContext>
    );
}

export default App;
