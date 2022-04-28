import React, { useEffect, useState } from 'react';
import ItemsList from '../ItemsList/ItemsList';
import './ItemListContainer.css';
import animales1 from './ItemListContainerImg/animales/animales1.jpg'
import calco1 from './ItemListContainerImg/calcos/calco1.jpg'
import calco2 from './ItemListContainerImg/calcos/calco2.jpg'
import cantante3 from './ItemListContainerImg/cantantes/cantante3.jpg'

function getProducts() {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Calcos',
        price: '$250',
        img:    calco1
      },
      {
        id: 2,
        title: 'Remera Estampada',
        price: '$950',
        img:    cantante3
      },
      {
        id: 3,
        title: 'Calcos',
        price: '$250',
        img:    calco2
      },
      {
        id: 4,
        title: 'Remera Estampada',
        price: '$950',
        img:    animales1
      }
    ];
    setTimeout(() => {
      resolve(productsList);
    }, 0);
  });
  return myPromise;
}

function ItemListContainer ({ greeting }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
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