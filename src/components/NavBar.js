import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

import CartWidget from './CartWidget.js';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className='logo'>
                <img src={logo} alt="logo" className="logo-icon"/>
                <span className='logo-text'>Re-energy</span>
            </div>

            <ul className="menu">
                <li className='button'><Link to="/">Inicio</Link></li>
                <li className='button'><Link to="/products/all">Productos</Link></li>
                <li className='button'><Link to="/">Contacto</Link></li>
                <li className='button'><Link to="/">Info</Link></li>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar;