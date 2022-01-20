import React, { useState } from "react";
import Input from "../../components/Input";
import Main from "../../components/Main";
import Button from "../../components/Button";

const ResetPass = () => {

  const [form, setForm] = useState({
    email: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Main>
      <h5>Reset Password</h5>
      <Input 
        placeholder="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange} 
      />
      <p>Forgot Password ?</p>
      <Button className="btn-input">Primary</Button>
      <h6>Don't have a Tokopedia accout? Register</h6>
    </Main>
  );
};

export default ResetPass;
