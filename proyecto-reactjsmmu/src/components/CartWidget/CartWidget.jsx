import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../Utils/cardContext/cardContext';
import Botonglobito from '../Botonglobito/Botonglobito';

import imgcw from './imgcw/carrito.png';

import './CartWidget.css';


const CartWidget = () => {
  const cartContx = useContext (CartContext);

  return (
    <>
    <div>
      <a className='imgcarrito' href='carrito.html'>
        <Link to='/cart'><img src={imgcw} alt="carrito"/></Link>
      </a>
      {cartContx.products.length !== 0 &&
        <div className='contador-cantidad'>
          <Botonglobito>
            {cartContx.getCartQuantity()}
          </Botonglobito>
        </div>
      }
    </div>
    </>
  )
}

export default CartWidget