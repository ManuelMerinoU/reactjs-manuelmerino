import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './Items.css';

function Product({ item }) {
  return (
    <div className='cards-productos'>
        <div className='box-producto'>
            <div className='img-producto'>
                <img className='product-img' src={ item?.img } alt="Imagen del producto" />
            </div>
            <div className='nombre-producto'>{ item?.title }</div>
            <div className='footer'>{ item?.price }</div>
        </div>
        <ItemCount initial={1} stock={10} />
    </div>
  )
}

export default Product