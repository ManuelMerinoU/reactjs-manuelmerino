import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './DetailItemList.css';

function DetailProduct({ item }) {
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
            <ItemCount initial={1} stock={10} />
        </div>
    </div>
  )
}

export default DetailProduct