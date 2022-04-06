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

  const handleIncrementQty = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    let cartItem = cart[index];
    cartItem.quantity++;
    updatecartItem(); //originally supposed to be cart update
  };

  const handleDecrementQty = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    let cartItem = cart[index];
    if (cartItem.quantity <= 0) {
      cartItem.quantity = 0;
    } else {
      cartItem.quantity--;
    }
    updatecartItem(); //originally supposed to be cart update
  };

  const updatecartItem = () => {
    setCart(cart);
  };

  const handleOnClickToCheckout = () => {
    axios({
      baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
      data : {
        customer_bags_id : customer_bags_id, 
        total_price : totalPrice, 
        total_quantity :totalQuantity, 
        customer_id : user_id
      },
      method : 'POST',
      url : `/orders/add-order`
    })
    .then((res) => {
      const result = res.data.data;
      console.log(result)
    })
    .catch((err) => {
      console.log(err);
    });
    navigate(`/checkout`)
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
                    <Input
                      type="checkbox"
                      name="AllItems"
                      value="AllItems"
                      className={`me-3 ${styles.checkbox}`}
                    />
                    <h5 className="mt-2">
                      Select all items{" "}
                      <span className="text-secondary">(2 items selected)</span>
                    </h5>
                  </div>
                  <h6 className="text-primary me-0 mt-2">Delete</h6>
                </div>
              </div>
              {/* cart items here using dummy data from cart array*/}
              {cart.map((cartItems) => {
                return (
                  <div
                    className={`my-3 p-2 shadow-sm m-2 ${styles.boxUpper}`}
                    key={cartItems.id}
                    onClick={()=>navigate(`/detail-product/${cartItems.id}`)}
                  >
                    <div className="wrapper d-flex w-100 justify-content-between">
                      <div className={`d-flex ${styles.width1}`}>
                        <Input
                          type="checkbox"
                          name={cartItems.name}
                          value={cartItems.id}
                          className={`me-3 ${styles.checkboxLower}`}
                          defaultChecked={false}
                        />
                        <img
                          src={cartItems.image1}
                          className={`${styles.prodImg} me-3`}
                          alt=""
                        />
                        <h6 className="mt-3">
                          {cartItems.name} <br />
                          <span className="text-secondary">
                            {cartItems.seller}
                          </span>
                        </h6>
                      </div>
                      <div className="d-flex buttons qty mt-3">
                        <Button
                          className={`${styles.formButton} ${styles.buttonMin} me-2`}
                          onClick={() => handleDecrementQty(cartItems.id)}
                        >
                          -
                        </Button>
                        <div className={`${styles.formButton}`}>
                          {cartItems.quantity}
                        </div>
                        <Button
                          className={`${styles.formButton} ${styles.buttonPlus}`}
                          onClick={() => handleIncrementQty(cartItems.id)}
                        >
                          +
                        </Button>
                      </div>
                      <h6 className="price mt-3">$ {cartItems.price}</h6>
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
