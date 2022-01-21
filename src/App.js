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
<<<<<<< HEAD
        <Route path="/" element={<Login/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="Reset-Password" element={<ResetPass/>}/>
        <Route path="Confirmation-Password" element={<ConfirmPass/>}/>
=======
        {/* <Route path="/" element={<Login/>}/> */}
>>>>>>> 94b5b07bce10f079b0e9a13aa7f858db1cd1b32e
      </Routes>
    </BrowserRouter>
  );
}

export default App;
