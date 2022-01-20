import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Main from '../../components/Main';
import '../../components/Button/button.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

    const handleClick = ()=>{
        navigate("/signup")
      } 

  return (
      <div>
          <Main>
              <h5 className='fw-bold my-4'>Please Login Your Account</h5>
              <div className='my-3'>
                <Button>Customer</Button>
                <Button>Seller</Button>
              </div>
              <Input
                placeholder = "Email"
                name = "email"
                type = "email"
                value = {form.email}
                onChange = {handleChange}
              />
              <Input
                placeholder="Password"
                name = "password"
                type = "password"
                value = {form.password}
                onChange = {handleChange}
              />
              <p>Forgot Password ?</p>
              <Button className="btn-input" onClick={handleClick}>
                  Primary
              </Button>
              <h6>Don't have a Tokopedia accout? Register</h6>
          </Main>
      </div>
  );
};

export default Login;
