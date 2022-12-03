import { Link } from 'react-router-dom';

import { Navbar, Container, Nav } from 'react-bootstrap';

import CartWidget from './CartWidget.js';

import { linkStyle } from '../app/styles.js';

const NavBar = () => {

    return (
    <>
      <Navbar bg="dark" variant="dark" style={{marginBottom: 30}}>
        <Container>
          <Navbar.Brand> <Link to="/" style={linkStyle}>Re-energy</Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/products/solar" style={linkStyle}>Paneles Solares</Link></Nav.Link>
            <Nav.Link><Link to="/products/batery" style={linkStyle}>Baterías</Link></Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
      </Navbar>
    </>
    )
}

export default NavBar;