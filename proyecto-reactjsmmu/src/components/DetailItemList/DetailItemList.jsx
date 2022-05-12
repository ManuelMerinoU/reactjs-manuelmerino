import React, { useContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2'


import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Utils/cardContext/cardContext';

import './DetailItemList.css';

/* TOASTIFY */
import { notifyBorrarProducto } from '../../Utils/Toastify/Toastify';
import { notifyBorrasTodo } from '../../Utils/Toastify/Toastify';



function DetailItemList({ item }) {
 

  const cartContx = useContext(CartContext) ;
  
  function añadirCarrito(cantidadAgregada) {
    cartContx.addProduct({quantity: cantidadAgregada, ...item });
  }

  return (
    <div className='cards-producto'>
        <div className='box-producto'>
            <div className='img-producto'>
                <img className='product-img' src={ item?.img } alt="Imagen del producto" />
            </div>
        </div>

        <div className='info-producto'>
            <div className='nombre-producto'>{ item?.title }</div>
             <button className='futura' >FUTURA TABLA DE TALLES ACÁ</button>
            <div className='footer'>{ item?.price }</div>
            <div>
              <ItemCount initial={1} stock={10} onAdd={añadirCarrito} />

              <button onClick={() => notifyBorrasTodo(cartContx.clear())}>Borrar Carrito</button>

              <button onClick={() => console.log(cartContx.products)} >Mostrar carrito</button>

              <button onClick={() => notifyBorrarProducto(cartContx.removeProduct(item.id))} >Borrar Producto</button>

              {/*<button onClick={() => cartContx.clear()} >Clear</button>*/}

              <button onClick={() => alert(cartContx.isInCart(item.id))} >Is in cart</button>

              <button onClick={() => toast(cartContx.getCartQuantity())} >Cantidad de Productos</button>

              {cartContx.products.length &&
                  <button onClick={() => console.log(cartContx)}>
                      <Link to='/cart'>
                        Terminar compra ({ cartContx.getCartQuantity() } items)
                      </Link>
                  </button>
              }
              <ToastContainer/>
            </div>
        </div>
    </div>
  )
}
export default DetailItemList

/*Toastify({
  text: `Agregaste este Producto al Carrito`,
  duration: 2000,
  className:"toastitext"
}).showToast();*/