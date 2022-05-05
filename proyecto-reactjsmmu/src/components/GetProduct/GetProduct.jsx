//import React from 'react'
import animales1 from '../Media/animales/animales1.jpg'
import calco1 from '../Media/calcos/calco1.jpg'
import calco2 from '../Media/calcos/calco2.jpg'
import cantante3 from '../Media/cantantes/cantante3.jpg'

function GetProducts(category) {
  const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Calcos',
        price: '$250',
        category: "calcos",
        img:    calco1
      },
      {
        id: 2,
        title: 'Remera Estampada',
        price: '$950',
        category: "remeras",
        img:    cantante3
      },
      {
        id: 3,
        title: 'Calcos',
        price: '$250',
        category: "calcos",
        img:    calco2
      },
      {
        id: 4,
        title: 'Remera Estampada',
        price: '$950',
        category: "remeras",
        img:    animales1
      }
    ];

    const categoryFiltered = category ? productsList.filter (p => p.category === category ) : productsList;

    setTimeout(() => {
      resolve(categoryFiltered);
    }, 0);
  });
  return myPromise;
}

export default GetProducts