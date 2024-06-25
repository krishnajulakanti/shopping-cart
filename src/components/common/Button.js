import React from 'react';
import { Button as AntButton } from 'antd';

const Button = ({ onClick, items }) => {
  return <AntButton onClick={onClick}>{items}</AntButton>;
};

export default Button;
