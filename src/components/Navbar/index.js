import React from 'react';
import styles from './navbar.module.css';
import Input from '../../components/Input/index'
// import Logo from '../../../public/images/shopping-bag 1';
import { FiShoppingCart } from 'react-icons/fi';
import { BsFillBellFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import {BsFillFunnelFill} from "react-icons/bs";
import img from '../../assets/img/1.png'



const Navbar = () => {
    return (
        <div className={`${styles.headerbody}  container-fluid`}>
            <div className={`container bg-white d-flex py-4 align-items-center`}>
                <div className="left w-25 text-primary"><h3>Blanja</h3></div>
                <div className="mid w-50"><Input placeholder='Search' className={`${styles.src} w-75 px-3`}/></div>
                <div className="right d-flex w-25 justify-content-end pe-3">
                <div className="BsFillFunnelFill fs-3 me-5 text-secondary"><BsFillFunnelFill/></div>
                    <div className="cart-icon fs-4 me-5 text-secondary"><FiShoppingCart/></div>
                  <div className="BsFillBellFill fs-4 me-5 text-secondary"><BsFillBellFill/></div>
                  <div className="BsFillEnvelopeFill fs-3 me-5 text-secondary"><BsFillEnvelopeFill/></div>
                  <div className="profile">
                      <img src="../../../assets/img/christian-buehner-DItYlc26zVI-unsplash 1.png"></img>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Navbar;
