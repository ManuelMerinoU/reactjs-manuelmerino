import React from 'react';
import Product from '../Items/Items';
import './ItemsList.css';

function ItemsList({ items }) {
    return (
        <div className='items-list'>
            {items.map(item => <Product item={item} key={item.id} />)}
        </div>
    )
}

export default ItemsList