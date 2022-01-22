import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    password: ""
  })

  // const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleClick = () => {
  //   navigate
  // }

  return (
    <Main>
      <h5 className="fw-bold my-4">Please sign up with Your Account</h5>
      <div className="my-2">
        <Button className="btn-tabs">Customer</Button>
        <Button className="btn-tabs">Seller</Button>
      </div>
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
      <Button className="btn-input">Primary</Button>
      <h6>Already have a Tokopedia account ? <Link to="/" className="text-decoration-none"> Login</Link></h6>
    </Main>
  );
};

export default SignUp;
