import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Main from '../../components/Main';
import '../../components/Button/button.css'

const Login = () => {
  return (
      <div>
          <Main>
              <h5 className='fw-bold my-4'>Please Login Your Account</h5>
              <div className='my-3'>
                <Button>Customer</Button>
                <Button>Seller</Button>
              </div>
              <Input
                placeholder="Email"
              />
              <Input
                placeholder="Password"
              />
              <p>Forgot Password ?</p>
              <Button className="btn-input">
                  Primary
              </Button>
              <h6>Don't have a Tokopedia accout? Register</h6>
          </Main>
      </div>
  );
};

export default Login;
