import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import './modal.css'

const COModal = ({ handleModal, totalPrice, customer_bags_id, totalQuantity }) => {

    const [payment, setPayment] = useState('')
    const [methods, setMethods] = useState([])
    const UID = JSON.parse(localStorage.getItem('userId'))
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_URL_BACKEND}/payment-methods`)
        .then((res)=>{
            const result = res.data.data
            setMethods(result)
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [])

    const handleSetPayment = (e) => {
        setPayment(e.target.value)
    }

    const handleCO = () => {
        axios({
            baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
            data: {
              customer_bags_id: customer_bags_id,
              total_price: totalPrice,
              total_quantity: totalQuantity,
              customer_id: UID,
              payment_method_id: payment
            },
            method: 'POST',
            url: `/orders/add-order`
          })
            .then((res) => {
              const result = res.data.data;
              console.log(result)
              localStorage.removeItem('customer_bags_id')
              handleModal()
              navigate('/My-Order')
            })
            .catch((err) => {
              console.log(err);
            });
      
    }
    return (
        <div>
            <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
                <div class="modal-pin bg-white">
                    <div class="top-modal d-flex py-3 shadow-sm">
                        <h3 class="close-modal mx-3 text-secondary" onClick={handleModal}>x</h3>
                        <h3>Payment</h3>
                    </div>
                    <p class="text-secondary mx-3 my-2 fw-bold">Payment Method</p>

                    {methods.map((method) => {
                        return (
                            <div className={`wrapper-methods mx-3 my-2 d-flex justify-content-between align-items-center`}>
                                <div className="method-pic-wrapper">
                                    <img className='method-pic' src={method.logo} alt="" />
                                </div>
                                <h6 className='text-dark'>{method.name}</h6>
                                <Input
                                    type="radio"
                                    onChange={handleSetPayment}
                                    name="method_payment"
                                    value={method.id}
                                    className="me-3 checkboxLower"
                                    defaultChecked={false}
                                />
                            </div>
                        )
                    })
                    }
                    <hr className="mt-1" />
                    <p class="mx-3 my-2 fw-bold">Shopping Summary</p>
                    <div className="d-flex justify-content-between mx-3 my-2">
                        <p className="text-secondary">Order</p>
                        <p className='fw-bold'>$ {totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between mx-3 my-2">
                        <p className="text-secondary">Delivery</p>
                        <p className='fw-bold'>$ 0.00</p>
                    </div>

                    <div class="lower-wrapper pb-3 w-100 d-flex justify-content-between shadow-sm">
                        <p className='fw-bold ms-3'>Shopping Summary <br />
                            <span className='text-primary fw-bold'>$ {totalPrice}</span></p>
                        <Button class={!payment ? `continue-button bg-secondary text-white mx-3 my-2` : `pointer continue-button bg-primary mx-3 my-2`}
                        disabled={!payment}
                        onClick={handleCO}>Buy</Button>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default COModal;
