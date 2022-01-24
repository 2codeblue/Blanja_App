/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import "../../components/Button/button.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [customer, setCustomer] = useState(true)
  const [submitCustomer, setSubmitCustomer] = useState(true)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitClick = () => {
    if (submitCustomer === true) {
        setSubmitCustomer(true)
        axios({
            baseURL : `${process.env.REACT_APP_API_URL}`,
            data : {
                email : form.email,
                password : form.password
            },
            method : 'POST',
            url : `users/customer/login`
        })
        .then((res)=>{
            const result = res.data
            const customerId =  result.data[0].id
            console.log(result.data);
            localStorage.setItem('auth', "1")
            localStorage.setItem('userId', JSON.stringify(customerId))
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    } else {
        setSubmitCustomer(false)
        axios({
            baseURL : `${process.env.REACT_APP_API_URL}`,
            data : {
                email : form.email,
                password : form.password
            },
            method : 'POST',
            url : 'users/seller/login'
        })
        .then((res)=>{
            const result = res.data
            const customerId =  result.data[0].id
            console.log(result.data);
            localStorage.setItem('auth', "1")
            localStorage.setItem('userId', JSON.stringify(customerId))
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  };

  const checkButtonNameClick = (e) => {
    if (e.target.innerText === 'Customer') {
        setCustomer(true)
      console.log(`Form Customer`)
      //set url untuk axios nya ke endpoint nya customer
    } else {
        setCustomer(false)
      console.log(`Form Seller`)
      //set url untuk axios nya ke endpoint nya seller
    }
  }

  return (
    <div>
      <Main>
        <h5 className="fw-bold my-4">Please Login Your Account</h5>
        <div className="my-3">
          <Button className="btn-tabs rounded-start" onClick={checkButtonNameClick}>Customer</Button>
          <Button className="btn-tabs rounded-end" onClick={checkButtonNameClick}>Seller</Button>
        </div>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <div className="w-50 pe-5 me-5 mt-3 text-end">
            <Link to="/reset-password" className="text-decoration-none"><p>Forgot Password ? </p></Link>
        </div>
        <Button className="btn-input" onClick={handleSubmitClick}>
          Primary
        </Button>
        <h6 className="mt-3">Don't have a Tokopedia accout ? <Link to="/SignUp" className="text-decoration-none"> Register</Link> </h6>
      </Main>
    </div>
  );
};

export default Login;
