import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Auth/Login';
import DetailProduct from './pages/DetailProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        <Route path="/detail-product" element={<DetailProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
