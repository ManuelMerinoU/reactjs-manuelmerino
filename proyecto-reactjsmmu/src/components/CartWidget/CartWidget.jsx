import React from 'react';
import { Link } from 'react-router-dom';

import imgcw from './imgcw/carrito.png';

import './CartWidget.css';

const CartWidget = () => {
  return (
    <>
    <a className='imgcarrito' href='carrito.html'>
      <Link to='/cart'><img src={imgcw} alt="carrito"/></Link>
    </a>
    </>
  )
}

export default CartWidget