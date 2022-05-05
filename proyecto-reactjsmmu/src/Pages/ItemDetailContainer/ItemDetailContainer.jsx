import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import DetailProduct from '../../components/DetailItemList/DetailItemList';
import GetItemDetail from '../../components/GetItemDetail/GetItemDetail';
import Loading from '../../components/Loading/Loading';

import './ItemDetailContainer.css';

function ItemDetailContainer () {

  const [item, setItem] = useState({});
  const { id } = useParams();
  const  [loading, setLoading] = useState (false);

  useEffect(() => {
    setLoading(true)
    GetItemDetail(id)
      .then(res => {
        setItem(res);
      })
      .finally(()=>{
        setLoading(false)
      })
  },[id]);

  return(
    <div className='greeting'>
      <p>Producto Seleccionado</p>
      {loading && <Loading/>}
      <DetailProduct item={item}/>
    </div>
  )
}

export default ItemDetailContainer