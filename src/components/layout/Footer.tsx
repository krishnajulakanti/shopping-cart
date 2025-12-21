import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => (
  <AntFooter style={{ textAlign: 'center' }}>
    E-commerce App ©2024 Created by KV
  </AntFooter>
);

export default Footer;

