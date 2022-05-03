import React, { useEffect, useState } from 'react';
import ItemsList from '../ItemsList/ItemsList';
import './ItemListContainer.css';
import GetProducts from '../GetProduct/GetProduct';

function ItemListContainer ({ greeting }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetProducts()
      .then(res => {
        setProducts(res);
      })
  }, []);

  return(
    <div className='greeting'>
      <p>{greeting}</p>
      <ItemsList items={products}/>
    </div>
  )
}

export default ItemListContainer