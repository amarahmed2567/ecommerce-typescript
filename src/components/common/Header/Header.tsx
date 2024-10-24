import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import HeaderBasket from '@components/eCommerce/HeaderBasket/HeaderBasket';

import styles from './styles.module.css';

const {headerContainer,headerLogo} = styles
function Header() {
  return (
    <header className=''>
     <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge bg="warning">Ecom</Badge>
        </h1>

        <HeaderBasket />
      </div>
    <Navbar expand="lg"  bg='dark' data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav"   className='border-0 fs-6'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
            <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
            <Nav.Link as={NavLink} to="about-us">About Us</Nav.Link>
          </Nav>
          <Nav >
          <Nav.Link as={NavLink} to="login">login</Nav.Link>
          <Nav.Link as={NavLink} to="register">register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

  );
}
export default Header