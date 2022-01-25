import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserContext from './Context/userContext';
import ConfirmPass from './pages/Auth/ConfirmPass';
import Login from './pages/Auth/Login';
import ResetPass from './pages/Auth/ResetPass';
import SignUp from './pages/Auth/SignUp';
import Checkout from './pages/Checkout';
import DetailProduct from './pages/DetailProduct';
import HomePage from './pages/Home';
import MyBag from './pages/MyBag';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <UserContext>
    <BrowserRouter>
      <Routes>
        <RequireAuth>
        <Route path="/detail-product/:id" element={<DetailProduct/>}/>
        <Route path="/my-bag" element={<MyBag/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/" element={<HomePage/>}/>
        </RequireAuth>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPass/>}/>
        <Route path="/confirmation-password" element={<ConfirmPass/>}/>
      </Routes>
    </BrowserRouter>
    </UserContext>
    );
}

export default App;
