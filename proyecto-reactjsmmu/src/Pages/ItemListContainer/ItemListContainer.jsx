import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemsList from '../../components/ItemsList/ItemsList';
import GetProducts from '../../components/GetProduct/GetProduct';

import '../ItemListContainer/ItemListContainer.css';


function ItemListContainer () {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams ();

  useEffect(() => {
    GetProducts(categoryId)
      .then(res => {
        setProducts(res);
      })
  },[categoryId]);

  return(
    <div className='greeting'>
      <p>Catalogo de nuestros productos</p>
      <ItemsList items={products}/>
    </div>
  )
}

export default ItemListContainer