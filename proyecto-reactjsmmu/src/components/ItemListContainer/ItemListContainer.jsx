import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

function ItemListContainer ({ greeting }) {

  return(
    <div className='greeting'>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={10} />
    </div>
  )
}

export default ItemListContainer