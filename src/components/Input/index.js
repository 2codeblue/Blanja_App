import React from 'react';
import './input.css'

const Input = ({...props}) => {
  return (
    <input className='input ps-3' {...props} />
  );
};

export default Input;
