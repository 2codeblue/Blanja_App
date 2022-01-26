import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import ProductContext from './Context/ProductContext'
import UserContext from './Context/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <ProductContext>
      <UserContext>
    <App />
    </UserContext>
    </ProductContext>
  </React.StrictMode>,
  document.getElementById('root')
);
