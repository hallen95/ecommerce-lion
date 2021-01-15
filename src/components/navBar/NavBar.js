import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';

const navBar = () => {

return (
  <Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">Lion</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#home">Productos</Nav.Link>
    <Nav.Link href="#link">Contacto</Nav.Link>
  </Nav>
  <Form inline>
    <CartWidget/>
    <FormControl type="text" placeholder="buscar" className="mr-sm-2" />
  </Form>
</Navbar.Collapse>
</Navbar>)
}

export default navBar;