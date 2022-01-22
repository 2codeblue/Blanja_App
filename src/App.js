import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ConfirmPass from './pages/Auth/ConfirmPass';
import Login from './pages/Auth/Login';
import ResetPass from './pages/Auth/ResetPass';
import SignUp from './pages/Auth/SignUp';
import DetailProduct from './pages/DetailProduct';
import HomePage from './pages/Home';
import ProfileCustomer from './pages/Profile/Customer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPass/>}/>
        <Route path="/confirmation-password" element={<ConfirmPass/>}/>
        <Route path="/detail-product" element={<DetailProduct/>}/>
        <Route path="/profile-customer" element={<ProfileCustomer/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
