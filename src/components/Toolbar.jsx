import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';

const Toolbar = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/home')
  };

  const handleClickProducts = () => {
    navigate('/products')
  };
  return (
    <nav style={{padding: "30px"}}>
      <Button onClick={handleClickHome}>Home</Button>
      <Button onClick={handleClickProducts}>Products</Button>
    </nav>
  );
};

export default Toolbar;