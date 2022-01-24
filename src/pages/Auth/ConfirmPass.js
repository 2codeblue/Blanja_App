import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Main from '../../components/Main';

const ConfirmPass = () => {

  const navigate = useNavigate()

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

  const handleClick = ()=>{
    navigate("/confirmation-password-login")
  }

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
                  <div className="w-50 pe-5 me-5 mt-3 text-end">
            <Link to="/reset-password" className="text-decoration-none"><p>Forgot Password ? </p></Link>
        </div>
          <Button className="btn-input" onClick={handleClick}>Primary</Button>
      </Main>
  );
};

export default ConfirmPass;
