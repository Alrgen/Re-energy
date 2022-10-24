import '../style.css';
import logo from '../images/logo.png'

import CartWidget from './CartWidget.js';

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div className='logo'>
                <img src={logo} alt="logo" className="logo-icon"/>
                <span className='logo-text'>Re-energy</span>
            </div>

            <ul className="menu">
                <li className='button'><a href="#">Inicio</a></li>
                <li className='button'><a href="#">Productos</a></li>
                <li className='button'><a href="#">Contacto</a></li>
                <li className='button'><a href="#">Info</a></li>
            </ul>

            <CartWidget/>
        </div>
    )
}

export default NavBar;