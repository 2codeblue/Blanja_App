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
  const customer_bags_id = JSON.parse(localStorage.getItem("customer_bags_id"))
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios({
      baseURL: `${process.env.API_URL}`,
      method: "GET",
      url: `bags/${customer_bags_id}`,
    })
      .then((res) => {
        const result = res.data.data;
        setCart(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //

  const [checkedState, setCheckedState] = useState(
    new Array(cart.length).fill(false)
  );

  const handleCheckedAll = () => {
    setCheckedState(new Array(cart.length).fill(true));
    const totalPrice = checkedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + cart[index].price * cart[index].qty;
      }
      return sum;
    }, 0);
    setTotal(totalPrice);
  };

  const handleOnChange = (id) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index + 1 === id ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + cart[index].price * cart[index].qty;
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice);
  };

  const handleCheckedValue = (e) => {
    if (e.target.checked) {
      let id = e.target.value;
      setArray([...array, id]);
    }
  };

  const handleIncrementQty = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    let cartItem = cart[index];
    cartItem.qty++;
    updatecartItem(); //originally supposed to be cart update
    handleOnChange();
  };

  const handleDecrementQty = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    let cartItem = cart[index];
    if (cartItem.qty <= 0) {
      cartItem.qty = 0;
    } else {
      cartItem.qty--;
    }
    updatecartItem(); //originally supposed to be cart update
    handleOnChange();
  };

  const updatecartItem = () => {
    setCart(cart);
  };

  console.log(cart);
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
                      onChange={handleCheckedAll}
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
              {cart.map((cartItem) => {
                return (
                  <div className={`my-3 p-2 shadow-sm m-2 ${styles.boxUpper}`} key={cartItem.id}>
                    <div className="wrapper d-flex w-100 justify-content-between">
                      <div className={`d-flex ${styles.width1}`}>
                        <Input
                          type="checkbox"
                          name={cartItem.name}
                          value={cartItem.id}
                          className={`me-3 ${styles.checkboxLower}`}
                          onChange={(e) => {
                            handleCheckedValue(e);
                            handleOnChange(cartItem.id);
                          }}
                          defaultChecked={false}
                        />
                        <img
                          src={cartItem.image1}
                          className={`${styles.prodImg} me-3`}
                          alt=""
                        />
                        <h6 className="mt-3">
                          {cartItem.name} <br />
                          <span className="text-secondary">
                            {cartItem.seller}
                          </span>
                        </h6>
                      </div>
                      <div className="d-flex buttons qty mt-3">
                        <Button
                          className={`${styles.formButton} ${styles.buttonMin} me-2`}
                          onClick={() => handleDecrementQty(cartItem.id)}
                        >
                          -
                        </Button>
                        <div className={`${styles.formButton}`}>
                          {cartItem.quantity}
                        </div>
                        <Button
                          className={`${styles.formButton} ${styles.buttonPlus}`}
                          onClick={() => handleIncrementQty(cartItem.id)}
                        >
                          +
                        </Button>
                      </div>
                      <h6 className="price mt-3">$ {cartItem.price}</h6>
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
                  <h6>$ {total}</h6>
                </div>
                <Button
                  className={`${styles.lowerButtons} bg-primary ${styles.redButton} mt-5`}
                  onClick={() => navigate("/checkout")}
                >
                  Buy
                </Button>
              </div>
            </div>
          </section>
          {/* <div className={`my-3 p-2 shadow-sm m-2 ${styles.boxUpper}`}>
      <div className="wrapper d-flex w-100 justify-content-between">
        <div className="d-flex">
            <Input type="checkbox" name="AllItems" value="AllItems" className={`me-3 ${styles.checkboxLower}`}/>
            <img src={ProdImg} className={`${styles.prodImg} me-3`} alt="" />  
            <h6 className='mt-3'>Mens Formal Suit - Black <br/>
            <span className='text-secondary'>Zalora Cloth</span></h6>
            </div>
        <div className="d-flex buttons qty mt-3">
        <Button
                      className={`${styles.formButton} ${styles.buttonMin} me-2`}
                    >
                      -
                    </Button>
                    <div className={`${styles.formButton}`}>1</div>
                    <Button
                      className={`${styles.formButton} ${styles.buttonPlus}`}
                    >
                      +
                    </Button>
        </div>
        <h6 className="price mt-3">$ 20.00</h6>
          </div>
      </div> */}
        </div>
      </main>
    </Fragment>
  );
};

export default MyBag;
