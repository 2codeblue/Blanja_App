import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ConfirmPass from './pages/Auth/ConfirmPass';
import Login from './pages/Auth/Login';
import CategoryPage from './pages/CategoryPage';
import ResetPass from './pages/Auth/ResetPass';
import SignUp from './pages/Auth/SignUp';
import Checkout from './pages/Checkout';
import DetailProduct from './pages/DetailProduct';
import HomePage from './pages/Home';
import MyBag from './pages/MyBag';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/detail-product/:id" element={<DetailProduct/>}/>
        <Route path="/my-bag" element={<MyBag/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPass/>}/>
        <Route path="/confirmation-password" element={<ConfirmPass/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
