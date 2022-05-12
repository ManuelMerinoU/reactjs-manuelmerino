//import React from 'react'
import animales1 from '../../components/Media/animales/animales1.jpg'
import calco1 from '../../components/Media/calcos/calco1.jpg'
import calco2 from '../../components/Media/calcos/calco2.jpg'
import cantante3 from '../../components/Media/cantantes/cantante3.jpg'

function GetItemDetail(id) {
  const myPromise = new Promise((resolve, reject) => {

    const productsList = [
      {
        id: 1,
        title: 'Calcos1',
        price: '$250',
        category: "calcos",
        img:    calco1
      },
      {
        id: 2,
        title: 'Remera Estampada cantantes3',
        price: '$950',
        category: "remeras",
        img:    cantante3
      },
      {
        id: 3,
        title: 'Calcos2',
        price: '$250',
        category: "calcos",
        img:    calco2
      },
      {
        id: 4,
        title: 'Remera Estampada animales1',
        price: '$950',
        category: "remeras",
        img:    animales1
      }
    ];

    const item = productsList.filter(item => item.id === parseInt(id));

    setTimeout(() => {
      resolve(item[0]);
    }, 2000);
  });
  return myPromise;
}

export default GetItemDetail