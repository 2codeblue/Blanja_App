import React, { useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import './modal.css'

const COModal = ({ handleModal, totalPrice }) => {

    const [payment, setPayment] = useState('')

    // methods pake use state get data dari backend
    const methods = [{
        id: 1,
        name: "Gopay",
        logo: "https://www.premiro.com/assets/images/aset/logo_metode/gopay-logo-new.png"
    }, {
        id: 2,
        name: "Pos Indonesia",
        logo: "https://th.bing.com/th/id/R.fdb4917a13237157aaa2985e2949d9ae?rik=ER4Bvz8dyVfVYw&riu=http%3a%2f%2f1.bp.blogspot.com%2f-sESNhLiiZi4%2fTqkRI1QG6CI%2fAAAAAAAAAuE%2fuEhd_RPIvGA%2fs1600%2fLogo%2bPos%2bIndonesia.png&ehk=W7CvWdyRWpxfuGN9eAwADuB5ixOwhxmUb%2bOr8NyEowc%3d&risl=&pid=ImgRaw&r=0"
    }, {
        id: 3,
        name: "Mastercard",
        logo: "https://logosmarcas.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png"
    }]

    const handleSetPayment = (e) => {
        setPayment(e.target.value)
    }
    console.log(payment);

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

                    <div class="lower-wrapper w-100 d-flex justify-content-between shadow-sm">
                        <p className='fw-bold ms-3'>Shopping Summary <br />
                            <span className='text-primary fw-bold'>$ {totalPrice}</span></p>
                        <Button class={!payment ? `continue-button bg-secondary text-white mx-3 my-2` : `pointer continue-button bg-primary mx-3 my-2`}
                        disabled={!payment}>Buy</Button>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default COModal;
