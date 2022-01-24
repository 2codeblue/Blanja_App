import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/Button/button.css";
// import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Main from "../../components/Main";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    password: "",
  });

  const [customer, setCustomer] = useState(true)

  // const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleClick = () => {
  //   navigate
  // }

  const handleSubmitClick = () => {
    console.log(form)
  }

  const changeFormButton = (e) => {
    if (e.target.innerText === "Customer") {
      setCustomer(true)
      setForm({
        name: "",
        email: "",
        phone: "",
        store: "",
        password: "",
      })
    } else {
      setCustomer(false)
      setForm({
        name: "",
        email: "",
        phone: "",
        store: "",
        password: "",
      })
    }
  };

  return (
    <Main>
      <h5 className="fw-bold my-4">Please sign up with Your Account</h5>
      <div className="my-2">
        <Button className="btn-tabs" onClick={changeFormButton}>Customer</Button>
        <Button className="btn-tabs" onClick={changeFormButton}>Seller</Button>
      </div>
      {
        customer ? (
          <div className="d-flex flex-column">
            <Input
            placeholder="Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="text"
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
          </div>
        )
        :
        (
          <div className="d-flex flex-column">
            <Input
            placeholder="Name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Phone Number"
            name="phone"
            type="number"
            value={form.phone}
            onChange={handleChange}
          />
          <Input
            placeholder="Store Name"
            name="store"
            type="text"
            value={form.store}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          </div>
        )
      }

      <Button className="btn-input" onClick={handleSubmitClick}>Primary</Button>
      <h6 className="mt-3">Already have a Tokopedia account? <Link to="/login" className="text-decoration-none"> Login</Link> </h6>
    </Main>
  );
};

export default SignUp;
