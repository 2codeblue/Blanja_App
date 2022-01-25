import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import ProductContext from './Context/ProductContext'

ReactDOM.render(
  <React.StrictMode>
    <ProductContext>
    <App />
    </ProductContext>
  </React.StrictMode>,
  document.getElementById('root')
);
