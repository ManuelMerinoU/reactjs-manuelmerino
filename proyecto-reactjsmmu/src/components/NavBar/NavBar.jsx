import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

import { Link, NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
        <>
        {/* Un comentario JSX */}
        <div className='nav'>
            <div id='titulo'>
                <h1> <Link to={"/"}>About Saints Studio</Link> </h1>
            </div>
            <ul>
                <li className='active'><Link to={"/"}>Inicio</Link></li>

                <li> <Link to={"/"}>sobre nosotros</Link> </li>

                <li className='menu'><NavLink to={"/"}>Categorias</NavLink>
					<ul className='submenu'>
                        <li><Link to={"/category/calcos"}>CALCOS</Link></li>
                        <li><Link to={"/category/remeras"}>REMERAS</Link>
                            {/*<ul>
                                <li><Link to={"/category/peliculas"}>PELÍCULAS</Link></li>
                                <li><Link to={"/category/animalitos"}>ANIMALITOS</Link></li>
                                <li><Link to={"/category/cartoons"}>CARTOONS</Link></li>
                                <li><Link to={"/category/cantantes"}>CANTANTES</Link></li>
                                <li><Link to={"/category/nfl"}>N F L</Link></li>
                            </ul>*/}
                        </li>
                    </ul>
				</li>

                <li> <a href="#footer"> Derechos de Autor </a> </li>
            </ul>
            <CartWidget />
        </div>
        </>
    );
}

export default NavBar;