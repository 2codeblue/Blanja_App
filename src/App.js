import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import ConfirmPass from './pages/Auth/ConfirmPass';
import Login from './pages/Auth/Login';
import ResetPass from './pages/Auth/ResetPass';
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Login/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="Reset-Password" element={<ResetPass/>}/>
        <Route path="Confirmation-Password" element={<ConfirmPass/>}/>





      </Routes>
    </BrowserRouter>
  );
}

export default App;
