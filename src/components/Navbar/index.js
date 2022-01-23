/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from './navbar.module.css';
// import Logo from '../../../public/images/shopping-bag 1.svg';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineBell, AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    // const isLogin = JSON.parse(localStorage.getItem('auth'))
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setAuth(JSON.parse(localStorage.getItem('auth')))
        }
    })
    
    let rightNav = (
        <div className="right d-flex w-25 justify-content-end pe-3">
            <div className="cart-icon fs-4 me-5 text-secondary"><FiShoppingCart /></div>
            <div className="bell-ntf fs-4 me-5 text-secondary"><AiOutlineBell /></div>
            <div className="message fs-4 me-5 text-secondary"><AiOutlineMail /></div>
            <div><img className={`${styles.iconuserimg} rounded-circle`} src='https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png' alt='userprofile' /></div>
            {/* <Button onClick={logout} className={`${styles.buttonLogin} btn bg-primary text-white`}>Logout</Button> */}
        </div>
    )
    if (!auth) {
        <div className="right d-flex w-25 justify-content-end pe-3">
            <div className="cart-icon fs-4 me-5 text-secondary"><FiShoppingCart /></div>
            <div className="button">
                <Button className={`${styles.buttonLogin} btn bg-primary text-white`}>Login</Button>
                <Button className={`${styles.buttonSignup} btn bg-white text-secondary ms-3`}>Signup</Button>
            </div>
        </div>
    }

    // JANGAN DI HAPUS
    // const isLogin = JSON.parse(localStorage.getItem('auth'))
    // const logout = () => {
    //     localStorage.removeItem('auth')
    //     setAuth({ isLogin: false })
    // }

    return (
        <div className={`${styles.headerbody}  container-fluid`}>
            <div className={`container bg-white d-flex py-4 align-items-center`}>
                <div className="left w-25 text-primary">
                    {/* <div className="brand-logo"><img src={Logo} alt="" /></div> */}
                    <div className="title"><h3>Blanja</h3></div>
                </div>
                <div className="mid w-50"><Input placeholder='Search' className={`${styles.src} w-75 px-3`} /></div>
                {/* {auth ? (
                    <div className="right d-flex w-25 justify-content-end pe-3">
                        <div className="cart-icon fs-4 me-5 text-secondary"><FiShoppingCart /></div>
                        <div className="bell-ntf fs-4 me-5 text-secondary"><AiOutlineBell /></div>
                        <div className="message fs-4 me-5 text-secondary"><AiOutlineMail /></div>
                        <div><img className={`${styles.iconuserimg} rounded-circle`} src='https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png' alt='userprofile' /></div>
                    </div>
                ) : (
                    <div className="right d-flex w-25 justify-content-end pe-3">
                        <div className="cart-icon fs-4 me-5 text-secondary"><FiShoppingCart /></div>
                        <div className="button">
                            <Button className={`${styles.buttonLogin} btn bg-primary text-white`}>Login</Button>
                            <Button className={`${styles.buttonSignup} btn bg-white text-secondary ms-3`}>Signup</Button>
                        </div>
                    </div>
                )} */}
                {
                    rightNav
                }
            </div>
        </div>
    );
};

export default Navbar;
