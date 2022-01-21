import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Auth/Login';
import DetailProduct from './pages/DetailProduct';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail-product/:id" element={<DetailProduct/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>

    );
}

export default App;
