import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Main from "../../components/Main";
import Button from "../../components/Button";

const ResetPass = () => {

  const [form, setForm] = useState({
    email: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () =>{
    navigate('/confirmation-password')
  }

  return (
    <Main>
      <h5 className="my-4">Reset Password</h5>
      <Input 
        placeholder="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange} 
      />
      <div className='w-50 pe-5 me-5 mt-3 text-end'><Link to="/reset-password" className='text-decoration-none'> Forgot Password ?</Link></div>
      <Button className="btn-input" onClick={handleClick}>Primary</Button>
      <h6 className='mt-3'>Don't have a Tokopedia accout ? <Link to="/signup" className='text-decoration-none'> Register</Link></h6>
    </Main>
  );
};

export default ResetPass;
