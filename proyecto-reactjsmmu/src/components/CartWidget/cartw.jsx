import React from 'react';
import imgcw from './imgcw/carrito.png';
import './cw.css';

const CartW = () => {
  return (
    <>
    <a className='imgcarrito' href='carrito.html'>
      <img src={imgcw} alt="carrito"/>
    </a>
    </>
  )
}

export default CartW