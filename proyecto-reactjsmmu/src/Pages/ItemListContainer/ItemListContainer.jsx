import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemsList from '../../components/ItemsList/ItemsList';
import GetProducts from '../../Utils/GetProduct/GetProduct';

import '../ItemListContainer/ItemListContainer.css';


function ItemListContainer () {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams ();

  useEffect(() => {

    /*getDocs(q, itemCollection)
      .then(snapshot =>{
        console.log(snapshot.docs.map( doc => { return{ ...doc.data(), id: doc.id }}));
    })*/

    GetProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map( doc => { 
          return{ ...doc.data(), id: doc.id }
        }));;
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