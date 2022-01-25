import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import styles from '../MyBag/mybag.module.css'
import ProdImg from '../../assets/img/mybagimg.svg'
import Button from '../../components/Button';
import COModal from '../../components/COModal';
import axios from 'axios';


const Checkout = () => {
    // eslint-disable-next-line no-unused-vars
    const [cart, setCart] = useState([])
    const [order, setOrder] = useState([])
    const customer_bags_id = JSON.parse(localStorage.getItem("customer_bags_id"));
    const user_id = JSON.parse(localStorage.getItem("userId"));
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        axios({
            baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
            method: "GET",
            url: `/bags/${customer_bags_id}`,
        })
        .then((res) => {
            const result = res.data.data;
            let price = 0;
            result.forEach((item) => {
                price = price + item.price * item.quantity;
            });
            setTotalPrice(price);
            setCart(result);
        })
        .catch((err) => {
            console.log(err);
        })

        axios({
            baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
            method: "GET",
            url: `/orders/${user_id}`,
        })
        .then((res) => {
            const result = res.data.data;
            setOrder(result);
        })
        .catch((err) => {
            console.log(err);
        })

    }, [])

    const [displayModal, setDisplayModal] = useState(false)

    const handleModal = () => setDisplayModal(!displayModal)

  return( 
    <main className={`containder-fluid bg-white ${styles.con}`}>
    <Navbar/>
    <div className={`container ${styles.conWrapper}`}>
    <h2 className='mt-5 fw-bold'>Checkout</h2>
    <h5>Shipping Address</h5>
    <section className="d-flex">
        <div className="left">
            <div className={`mt-3 mb-5 p-2 shadow-sm m-2 ${styles.boxUpper}`}>
                <div className="wrapper w-100 justify-content-between my-2">
                    <h5>Andreas Jean</h5>
                    <p>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                    <Button 
                    className={`p-2 bg-transparent outline-secondary text-secondary px-5 ${styles.buttonAddress}`}
                    >Choose another address
                    </Button>
                    </div>
            </div>
                                  {/* cart items here using dummy data from cart array*/}
      {cart.map((cartItem, index)=>{
          return (
              <div className={`my-3 p-2 shadow-sm m-2 ${styles.boxUpper}`}>
              <div className="wrapper d-flex w-100 justify-content-between">
                  <div className={`d-flex ${styles.width1}`}>
                  <img src={cartItem.image1} className={`${styles.prodImg} me-3`} alt="" />  
                    <h6 className='mt-3'>{cartItem.name} <br/>
                    <span className='text-secondary'>{cartItem.seller}</span></h6>
                  </div>
                    <div className={`${styles.formButtons} mt-3 fw-bold`}>x {cartItem.quantity}</div>
                    <h6 className="price mt-3">$ {cartItem.price}</h6>
                  </div>
              </div>
                    )
      })}
        </div>
        <div className={`right ms-5 mt-3`}>
            <div className={`p-3 shadow-sm ${styles.cartSummary}`}>
            <h6 className='fw-bold mt-3'>Shopping Summary</h6>
            <div className="d-flex justify-content-between">
                <h6 className='text-secondary'>Total Price</h6>
                <h6>$ {totalPrice}</h6>
            </div>
            <div className="d-flex justify-content-between">
                <h6 className='text-secondary'>Shipping Fee</h6>
                <h6>Free</h6>
            </div>
            <hr></hr>
            <div className="d-flex justify-content-between">
                <h6 className='text-secondary'>Shipping Summary</h6>
                <h6>$ {totalPrice}</h6>
            </div>
            <Button
            className={`${styles.lowerButtons} bg-primary ${styles.redButton} mt-5`}
            onClick={handleModal}
            >Payment Method
                </Button>
            </div>
        </div>
    </section>    
    </div>
    {displayModal && <COModal handleModal= {handleModal}/>}
    </main>
)
};

export default Checkout;
