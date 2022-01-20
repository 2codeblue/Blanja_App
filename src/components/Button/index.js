import React from 'react';

const Button = ({isloading, children, ...props}) => {
  return (
      <button {...props}>{children}</button>
  );
};

export default Button;
