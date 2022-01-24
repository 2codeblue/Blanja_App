import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Main from "../../components/Main";
import Input from "../../components/Input";

const ConfirmLog = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [submitCustomer, setSubmitCustomer] = useState(true);

  const handleSubmitClick = () => {
    if (submitCustomer) {
      setSubmitCustomer(true);
      axios({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        data: {
          email: form.email,
          password: form.password,
        },
        method: "POST",
        url: `users/customer/login`,
      })
        .then((res) => {
          const result = res.data;
          const customerId = result.data[0].id;
          console.log(result.data);
          localStorage.setItem("auth", "1");
          localStorage.setItem("userId", JSON.stringify(customerId));
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setSubmitCustomer(false);
      axios({
        baseURL: `${process.env.REACT_APP_API_URL}`,
        data: {
          email: form.email,
          password: form.password,
        },
        method: "POST",
        url: "users/seller/login",
      })
        .then((res) => {
          const result = res.data;
          const customerId = result.data[0].id;
          console.log(result.data);
          localStorage.setItem("auth", "1");
          localStorage.setItem("userId", JSON.stringify(customerId));
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Main>
      <h5 className="fw-bold my-4">Please Login Your Account</h5>
      <div className="w-50 text-center text-secondary">
        <p>
          We have sent an email containing a password reset instruction to your
          email.
          <br /> please check your email.
        </p>
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
        <Link to="/reset-password" className="text-decoration-none">
          <p>Forgot Password ? </p>
        </Link>
      </div>
      <Button className="btn-input" onClick={handleSubmitClick}>
        Primary
      </Button>
    </Main>
  );
};

export default ConfirmLog;
