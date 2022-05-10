import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';

import './DetailItemList.css';

function DetailProduct({ item }) {
  const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
  function añadirCarrito(cantidadAgregada) {
    setCantidadDeProductos(cantidadAgregada);
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
            <p className='futura'>FUTURA TABLA DE TALLES ACÁ</p>
            <div className='footer'>{ item?.price }</div>
            <div>
              { cantidadDeProductos ?
                <button className='terminar-compra'><Link to='/cart'> Terminar compra ({ cantidadDeProductos } items)</Link></button> :
                <ItemCount initial={1} stock={10} onAdd={añadirCarrito} />
              }
            </div>
        </div>
    </div>
  )
}

export default DetailProduct