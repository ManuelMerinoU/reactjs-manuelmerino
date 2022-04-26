import React from 'react';
import imgcw from './imgcw/carrito.png';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <>
    <a className='imgcarrito' href='carrito.html'>
      <img src={imgcw} alt="carrito"/>
    </a>
    </>
  )
}

export default CartWidget