import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../../components/Footer/Footer';

import CartContext from '../../Utils/cardContext/cardContext'
import CartItems from '../../components/CartItems/CartItems';

/* TOASTIFY */
//import { notifyCompra } from '../../Utils/Toastify/Toastify';
import { notifyBorrasTodo } from '../../Utils/Toastify/Toastify';

function Cart() {
  const cartCtxt = useContext (CartContext)

  return (
    <>
      <div className='cart'>
        {cartCtxt.products.map(p => <CartItems item={p} key={p.id}/>)}
        {cartCtxt.products.length !== 0 ?
          <div className='total-container'>
            <p>Precio total: ${cartCtxt.getTotalPrice()}</p>
            <Link to="/terminarcompra">
              <button>Terminar compra</button>
            </Link>
            <button onClick={() => notifyBorrasTodo(cartCtxt.clear())}>Borrar Carrito</button>
          </div> :
          <>
            <h2>No hay productos en el carrito</h2>
            <button className='button-brown'>
              <Link to="/">Ir al inicio</Link>
            </button>
          </>
        }
        <ToastContainer/>
        
      </div>

      <Footer/>
    </>
  )
}

export default Cart