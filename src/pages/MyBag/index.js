import React, { Fragment, useState, useEffect } from "react";
import { useNavigate, Link, useParams, Navigate } from "react-router-dom";
import axios from "axios";
import Input from "../../components/Input";
import Navbar from "../../components/Navbar";
import styles from "./mybag.module.css";
import ProdImg from "../../assets/img/mybagimg.svg";
import Button from "../../components/Button";

const MyBag = () => {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  const customer_bags_id = JSON.parse(localStorage.getItem("customer_bags_id"));
  const user_id = JSON.parse(localStorage.getItem("userId"));
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios({
      baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
      method: "GET",
      url: `bags/${customer_bags_id}`,
    })
      .then((res) => {
        const result = res.data.data;
        let price = 0;
        let qty = 0;
        result.forEach((item) => {
          price = price + item.price * item.quantity;
          qty = qty + item.quantity;
        });
        setTotalPrice(price);
        setTotalQuantity(qty);
        setCart(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //

  // const handleIncrementQty = (id) => {
  //   const index = cart.findIndex((item) => item.id === id);
  //   let cartItem = cart[index];
  //   cartItem.quantity++;
  //   updatecartItem(); //originally supposed to be cart update
  // };

  // const handleDecrementQty = (id) => {
  //   const index = cart.findIndex((item) => item.id === id);
  //   let cartItem = cart[index];
  //   if (cartItem.quantity <= 0) {
  //     cartItem.quantity = 0;
  //   } else {
  //     cartItem.quantity--;
  //   }
  //   updatecartItem(); //originally supposed to be cart update
  // };

  // const updatecartItem = () => {
  //   setCart(cart);
  // };

  const handleOnClickToCheckout = () => {
    navigate(`/checkout`)
  }

  const handleDel = (id) => {
    console.log(id, "akan di-delete");
  }

  const handleDelAll = () => {
    //ngapus all items dari cart
  }
  console.log(cart);
  console.log(totalPrice);
  console.log(totalQuantity);
  return (
    <Fragment>
      <main className={`containder-fluid bg-white ${styles.con}`}>
        <Navbar />
        <div className={`container ${styles.conWrapper}`}>
          <h2 className="mt-5 fw-bold">My Bag</h2>
          <section className="d-flex">
            <div className="left">
              <div className={`mt-3 mb-5 p-2 shadow-sm m-2 ${styles.boxUpper}`}>
                <div className="wrapper d-flex w-100 justify-content-between">
                  <div className="d-flex">
                    {/* <Input
                      type="checkbox"
                      name="AllItems"
                      value="AllItems"
                      className={`me-3 ${styles.checkbox}`}
                    /> */}
                    <h5 className="mt-2">
                      Selected items{" "}
                      <span className="text-secondary">({cart.length} items selected)</span>
                    </h5>
                  </div>
                  <h6 className="text-primary me-0 mt-2 pointer"
                  onClick={handleDelAll}>Delete</h6>
                </div>
              </div>
              {/* cart items here using dummy data from cart array*/}
              {cart.map((cartItems) => {
                return (
                  <div
                    className={`my-3 p-2 shadow-sm m-2 ${styles.boxUpper}`}
                    key={cartItems.id}
                  >
                    <div className="wrapper d-flex w-100 align-items-center justify-content-between">
                      <div className={`d-flex ${styles.width1} align-items-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" class={`pointer bi bi-trash3 me-3 ${styles.hover}`} 
                        viewBox="0 0 16 16"
                        onClick={()=>handleDel(cartItems.product_id)}
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                        {/* <Input
                          type="checkbox"
                          name={cartItems.name}
                          value={cartItems.id}
                          className={`me-3 ${styles.checkboxLower}`}
                          defaultChecked={false}
                        /> */}
                        <img
                          src={cartItems.image1}
                          className={`${styles.prodImg} pointer me-3`}
                          alt=""
                          onClick={() => navigate(`/detail-product/${cartItems.product_id}`)}
                        />
                        <h6 className="mb-0">
                          {cartItems.name} <br />
                          <span className="text-secondary">
                            {cartItems.seller}
                          </span>
                        </h6>
                      </div>
                      <div className="d-flex buttons qty">
                        {/* <Button
                          className={`${styles.formButton} ${styles.buttonMin} me-2`}
                          onClick={() => handleDecrementQty(cartItems.id)}
                        >
                          -
                        </Button> */}
                        <div className={`${styles.formButton}`}>
                          x  {cartItems.quantity}
                        </div>
                        {/* <Button
                          className={`${styles.formButton} ${styles.buttonPlus}`}
                          onClick={() => handleIncrementQty(cartItems.id)}
                        >
                          +
                        </Button> */}
                      </div>
                      <h6 className="price mb-0">$ {cartItems.price}</h6>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={`right ms-5 mt-3`}>
              <div className={`p-3 shadow-sm ${styles.cartSummary}`}>
                <h6 className="fw-bold mt-3">Shopping Summary</h6>
                <div className="d-flex justify-content-between">
                  <h6 className="text-secondary">Total Price</h6>
                  <h6>$ {totalPrice ? totalPrice : `Loading`}</h6>
                </div>
                <Button
                  className={`${styles.lowerButtons} bg-primary ${styles.redButton} mt-5`}
                  onClick={handleOnClickToCheckout}
                >
                  Buy
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Fragment>
  );
};

export default MyBag;
