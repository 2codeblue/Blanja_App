import React from 'react';
import './input.css'

const Input = ({...props}) => {
  return (
    <input className='input' {...props} />
  );
};

export default Input;
