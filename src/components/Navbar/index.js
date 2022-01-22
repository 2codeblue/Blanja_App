import React from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from './navbar.module.css';
// import Logo from '../../../public/images/shopping-bag 1';
import { FiShoppingCart } from 'react-icons/fi';




const Navbar = () => {
  return (
      <div className={`${styles.headerbody}  container-fluid`}>
          <div className={`container bg-white d-flex py-4 align-items-center`}>
              <div className="left w-25 text-primary"><h3>Blanja</h3></div>
              <div className="mid w-50"><Input placeholder='Search' className={`${styles.src} w-75 px-3`}/></div>
              <div className="right d-flex w-25 justify-content-end pe-3">
                  <div className="cart-icon fs-4 me-5 text-secondary"><FiShoppingCart/></div>
                  <div className="button">
                        <Button className={`${styles.buttonLogin} btn bg-primary text-white`}>Login</Button>
                        <Button className={`${styles.buttonSignup} btn bg-white text-secondary ms-3`}>Signup</Button>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Navbar;
