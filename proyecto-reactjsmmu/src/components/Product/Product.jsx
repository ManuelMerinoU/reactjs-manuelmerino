import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './Product.css';

function Product({ item }) {

  const [cantidadDeProductos, setCantidadDeProductos] = useState(null);
  function añadirCarrito(cantidadAgregada) {
    setCantidadDeProductos(cantidadAgregada);
  }

  return (
    <div className='cards-productos-catalogo'>
      <div className='box-productos-catalogo'>
        <div className='img-productos-catalogo'>
          <img className='productos-catalogo-img' src={ item?.img } alt="Imagen del producto" />
        </div>
        <div className='nombre-productos-catalogo'>{ item?.title }</div>
        <div className='footer-catalogo'>{ item?.price }</div>
        <div className='btn-categoria-item'>
          <Link to={"/item/" + item?.id}>Saber Más!</Link>
        </div >
        
        <div>
          { cantidadDeProductos ?
            <button><Link to='/cart'>Terminar compra ({ cantidadDeProductos } items)</Link></button> :
            <ItemCount initial={1} stock={10} onAdd={añadirCarrito} />
          }
        </div>
        
      </div>
    </div>
  )
}

export default Product