import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import HomeCarousel from './components/HomeCarousel';
import Login from './pages/Auth/Login';
import HomePage from './pages/Home';

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login/>}/>
    //   </Routes>
    // </BrowserRouter>
    // <HomeCarousel/>
    <HomePage/>
  );
}

export default App;
