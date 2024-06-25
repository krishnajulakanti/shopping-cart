import React from 'react';
import { Button as AntButton } from 'antd';

const Button = ({ onClick, children }) => {
  return <AntButton onClick={onClick}>{children}</AntButton>;
};

export default Button;
