//import React from 'react'
import animales1 from '../Media/animales/animales1.jpg'

function GetItemDetail() {
    const myPromise = new Promise((resolve, reject) => {
      const productsList = [
        {
          id: 4,
          title: 'Remera Estampada',
          price: '$950',
          img:    animales1
        }
      ];
      setTimeout(() => {
        resolve(productsList);
      }, 2000);
    });
    return myPromise;
  }

export default GetItemDetail