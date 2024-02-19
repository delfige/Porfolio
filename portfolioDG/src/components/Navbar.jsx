
import React from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <header>
        <nav>
        <h1>DG Porfolio</h1>
        <Link className='link' to="/">Inicio</Link>
        <Link className='link' to="/proyectos">Proyectos</Link>
        <Link className='link' to="/contacto">Contacto</Link>
        </nav>
        </header>
    );
}
export default Navbar;