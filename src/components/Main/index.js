import React from 'react';
import './main.css'

const Main = ({children}) => {
  return (
    <div className="main d-flex flex-column justify-content-center align-items-center">
        <div className='d-flex flex-row'>
            <img src="images/shopping-bag 1.svg" alt="" />
            <h1 className='title'> Blanja</h1>
        </div>
        {children}
  </div>
  );
};

export default Main;
