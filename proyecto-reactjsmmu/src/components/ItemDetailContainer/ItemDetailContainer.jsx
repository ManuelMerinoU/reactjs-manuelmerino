import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import GetItemDetail from '../GetItemDetail/GetItemDetail';

function ItemDetailContainer ({ greeting }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetItemDetail()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return(
    <div className='greeting'>
      <p>{greeting}</p>
      <ItemDetail items={products}/>
    </div>
  )
}

export default ItemDetailContainer