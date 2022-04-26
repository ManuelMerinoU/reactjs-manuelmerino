import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

function NavBar(props) {
    return (
        <>
        {/* Un comentario JSX */}
        <div className='nav'>
            <div id='titulo'>  
                <h1> <a href="index.html"> About Saints Studio</a> </h1>
            </div>
            <ul>
                <li className='active'> <a href="index.html"> Inicio </a> </li>

                <li> <a href="#Nosotros"> sobre nosotros </a> </li>

                <li> <a href="Usuario.html"> usuario </a> </li>

                <li> <a href="Productos.html"> Productos </a> </li>

                <li> <a href="Contactanos.html"> Contactanos </a> </li>

                <li> <a href="SoporteT.html"> Soporte tecnico </a> </li>

                <li> <a href="#footer"> Derechos de Autor </a> </li>
            </ul>
            <CartWidget />
        </div>
        </>
    );
}

export default NavBar;