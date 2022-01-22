import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Main from '../../components/Main';

const ConfirmPass = () => {

  const [form, setForm] = useState({
    password: "",
    confirm_password: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
      <Main>
          <h5 className='my-3'>Reset Password</h5>
          <p className='text-primary'>You need to change your password to activate your account</p>
          <Input 
            placeholder="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <Input
            placeholder="Confirmation New Password"
            name="confirm_password"
            type="password"
            value={form.confirm_password}
            onChange={handleChange}
          />
          <p className='text-primary'>Forgot Password ?</p>
          <Button className="btn-input">Primary</Button>
      </Main>
  );
};

export default ConfirmPass;
