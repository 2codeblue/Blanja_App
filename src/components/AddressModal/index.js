import React, { useState, useEffect, useContext } from 'react';
import Button from '../Button';
import Input from '../Input'
import styles from './address.module.css'
import { userContext } from "../../Context/UserContext";
import axios from 'axios';

const AddressModal = ({ handleModal }) => {
    const { user, setUser } = useContext(userContext);
    const [form, setForm] = useState({
        recipient_name: '',
        recipient_phone_number: '',
        address: '',
        postal_code: null,
        city: '',
        address_type: ''
    })
    const [address_primary, setAddress_primary] = useState(false)
    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handlePrimary = (e) => {
        if (e.target.checked) {
            setAddress_primary(true)
        } else {
            setAddress_primary(false)
        }
    }
    const handleSubmit = () => {
        const formSubmit = { ...form, address_primary, customer_id : user.id } //submit ke be pake form submit y
        axios({
            baseURL: `${process.env.REACT_APP_URL_BACKEND}`,
            data: formSubmit,
            method: `POST`,
            url: `/addresses`,
          })
          .then((res) => {
            console.log(res);
            window.location.reload()
        })
          .catch((err) => {
              console.log(err)
          })
      
    }
    return (
        <>
            <main class="con container-fluid d-flex flex-column p-0 justify-content-between">
                <div class={`${styles.modalpin} bg-white p-3`}>
                    <h3 class="close-modal-3 text-secondary text-end pointer" onClick={handleModal}>x</h3>
                    <h3 className='text-capitalize text-center'>add new address</h3>
                    <div className="form p-3 w-100">
                        <p className="text-secondary">Save address as (ex : home address, office address)</p>
                        <Input
                            className={`w-100 p-3`}
                            placeholder='e.g. Rumah, Kantor, etc'
                            name='address_type'
                            onChange={handleForm}
                            value={form.address_type}
                        />
                        <div className="lower-form my-3 d-flex w-100 justify-content-between">
                            <div className="wrapper w-50 me-3">
                                <p className="text-secondary">Recipient’s name</p>
                                <Input
                                    className={`w-100 p-3`}
                                    onChange={handleForm}
                                    value={form.recipient_name}
                                    name="recipient_name"
                                    placeholder={user ? user.name : `Insert your name here`}
                                />

                            </div>
                            <div className="wrapper w-50 ms-3">
                                <p className="text-secondary">Recipient's telephone number</p>
                                <Input
                                    className={`w-100 p-3`}
                                    onChange={handleForm}
                                    value={form.recipient_phone_number}
                                    name="recipient_phone_number"
                                    type="number"
                                    placeholder={user ? user.phone_number : `e.g. 0812345...`}
                                />

                            </div>

                        </div>
                        <div className="lower-form my-3 d-flex w-100 justify-content-between">
                            <div className="wrapper w-50 me-3">
                                <p className="text-secondary">Address</p>
                                <Input
                                    className={`w-100 p-3`}
                                    onChange={handleForm}
                                    value={form.address}
                                    name="address"
                                />

                            </div>
                            <div className="wrapper w-50 ms-3">
                                <p className="text-secondary">Postal code</p>
                                <Input
                                    className={`w-100 p-3`}
                                    placeholder=''
                                    onChange={handleForm}
                                    value={form.postal_code}
                                    name="postal_code"
                                    type='number'
                                />
                            </div>

                        </div>
                        <div className="wrapper w-50 me-3">
                            <p className="text-secondary">City</p>
                            <Input
                                className={`w-100 p-3`}
                                onChange={handleForm}
                                value={form.city}
                                name="city"
                            />
                        </div>
                        <div className="w-50 mt-5 d-flex">
                            <Input
                                type="checkbox"
                                name="address_primary"
                                value={address_primary}
                                className={`me-3 ${styles.checkboxLower}`}
                                defaultChecked={false}
                                onChange={handlePrimary}
                            />
                            <p className="text-secondary">Make it the primary address</p>
                        </div>

                    </div>
                    <div className="wrapper w-100 d-flex justify-content-center">
                    <Button
                        className={!form.address || !form.city || !form.postal_code || !form.recipient_name || !form.recipient_phone_number 
                            ?
                            `${styles.lowerButtons} text-white w-75 text-center bg-secondary py-3 px-5` :
                            `${styles.lowerButtons} pointer text-white w-75 text-center bg-primary py-3 px-5`}
                        onClick={handleSubmit}
                        disabled={!form.address || !form.city || !form.postal_code || !form.recipient_name || !form.recipient_phone_number}
                    >
                        Save
                    </Button>
                    </div>

                </div>
            </main>
        </>
    )
}

export default AddressModal