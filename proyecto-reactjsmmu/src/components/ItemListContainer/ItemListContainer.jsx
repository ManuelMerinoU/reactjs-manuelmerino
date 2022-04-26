import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';

function ItemListC ({ greeting }) {

  /*function dummy () {
    console.log('dummy prop function');
  }*/

  return(
    <div className='greeting'>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={10} /*onAdd={dummy}*/ />
    </div>
  )
}

export default ItemListC