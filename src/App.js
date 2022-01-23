import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from './pages/Auth/Login';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
      </Routes>
    </BrowserRouter>

    );
}

export default App;
