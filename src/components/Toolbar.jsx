import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';

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
      <ToggleSwitch />
    </nav>
  );
};

export default Toolbar;