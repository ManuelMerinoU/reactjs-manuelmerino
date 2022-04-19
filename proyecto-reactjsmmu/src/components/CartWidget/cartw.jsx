import React from 'react';
import imgcw from './imgcw/carrito.png';
import './cw.css';

const CartW = () => {
  return (
    <>
    <a href='carrito.html'>
      <img className='imgcarrito' src={imgcw} alt="carrito"/>
    </a>
    </>
  )
}

export default CartW