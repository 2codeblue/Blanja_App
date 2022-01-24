/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from './navbar.module.css';
// import Logo from '../../../public/images/shopping-bag 1.svg';
import { FiShoppingCart } from 'react-icons/fi';
import { AiOutlineBell, AiOutlineMail } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    // const isLogin = JSON.parse(localStorage.getItem('auth'))
    const navigate = useNavigate()

    const [auth, setAuth] = useState(false)
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setAuth(JSON.parse(localStorage.getItem('auth')))
        }
    })

    if (!auth) {
        return (
            <div className={`${styles.headerbody}  container-fluid`}>
                <div className={`container bg-white d-flex py-4 align-items-center`}>
                    <div onClick={() => navigate('/')} className={`${styles.left} left w-25 text-primary`}>
                        {/* <div className="brand-logo"><img src={Logo} alt="" /></div> */}
                        <div className="title"><h3>Blanja</h3></div>
                    </div>
                    <div className="mid w-50"><Input placeholder='Search' className={`${styles.src} w-75 px-3 py-2`} /></div>
                    <div className="right d-flex w-25 justify-content-end pe-3">
                        <div className="cart-icon fs-4 me-5 text-secondary"><FiShoppingCart /></div>
                        <div className="button">
                            <Button onClick={()=>navigate('/login')} className={`${styles.buttonLogin} btn bg-primary text-white`}>Login</Button>
                            <Button onClick={()=>navigate('/signup')} className={`${styles.buttonSignup} btn bg-white text-secondary ms-3`}>Signup</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={`${styles.headerbody}  container-fluid`}>
                <div className={`container bg-white d-flex py-4 align-items-center`}>
                    <div onClick={() => navigate('/')} className={`${styles.left} left w-25 text-primary`}>
                        {/* <div className="brand-logo"><img src={Logo} alt="" /></div> */}
                        <div className="title"><h3>Blanja</h3></div>
                    </div>
                    <div className="mid w-50"><Input placeholder='Search' className={`${styles.src} w-75 px-3 py-2`} /></div>
                    <div className="right d-flex w-25 justify-content-end pe-3">
                        <div className="cart-icon fs-4 me-5 text-secondary"><p onClick={() => navigate('/my-bag')} className={styles.carticon}><FiShoppingCart /></p></div>
                        <div className="bell-ntf fs-4 me-5 text-secondary"><AiOutlineBell /></div>
                        <div className="message fs-4 me-5 text-secondary"><AiOutlineMail /></div>
                        <div><img onClick={() => navigate('/profile')} className={`${styles.iconuserimg} rounded-circle`} src='https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png' alt='userprofile' /></div>
                    </div>
                </div>
            </div>
        )
    }

    // JANGAN DI HAPUS
    // const isLogin = JSON.parse(localStorage.getItem('auth'))
    // const logout = () => {
    //     localStorage.removeItem('auth')
    //     setAuth({ isLogin: false })
    // }
};

export default Navbar;
