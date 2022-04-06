import React from 'react';

const Button = ({disabled, children, ...props}) => {
  return (
      <button disabled={disabled? true : false} {...props}>{children}</button>
  );
};

export default Button;
