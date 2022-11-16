import { Link } from 'react-router-dom';

import CartWidget from './CartWidget.js';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className='logo'>
                <img src='../assets/logo.png' alt="logo" className="logo-icon"/>
                <span className='logo-text'>Re-energy</span>
            </div>

            <ul className="menu">
                <li className='button'><Link to="/">Inicio</Link></li>
                <li className='button'><Link to="/products/solar">Paneles solares</Link></li>
                <li className='button'><Link to="/products/batery">Baterias</Link></li>
                <li className='button'><Link to="/">Contacto</Link></li>
                <li className='button'><Link to="/">Info</Link></li>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar;