import React from 'react';
import DetailProduct from '../DetailItemList/DetailItemList';
import './ItemDetail.css';

function ItemDetail({ items }) {
    return (
        <div className='items-list'>
            {items.map(item => <DetailProduct item={item} key={item.id} />)}
        </div>
    )
}

export default ItemDetail