import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";
import "../../components/Button/button.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    navigate("/");
  };

  const checkButtonNameClick = (e) => {
    if (e.target.innerText === 'Customer') {
      console.log(`Form Customer`)
      //set url untuk axios nya ke endpoint nya customer
    } else {
      console.log(`Form Seller`)
      //set url untuk axios nya ke endpoint nya seller
    }
  }

  return (
    <div>
      <Main>
        <h5 className="fw-bold my-4">Please Login Your Account</h5>
        <div className="my-3">
          <Button className="btn-tabs" onClick={checkButtonNameClick}>Customer</Button>
          <Button className="btn-tabs" onClick={checkButtonNameClick}>Seller</Button>
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
        <Button className="btn-input" onClick={handleClick}>
          Primary
        </Button>
        <h6 className="mt-3">Don't have a Tokopedia accout ? <Link to="/SignUp" className="text-decoration-none"> Register</Link> </h6>
      </Main>
    </div>
  );
};

export default Login;
