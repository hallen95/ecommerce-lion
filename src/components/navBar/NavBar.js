import React from 'react'
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'

const navBar = () => {

return (
  <Navbar bg="light" expand="lg">
    <Link to={'/'}><Navbar.Brand href="#home">Lion</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Productos</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <Link to={'/category/shampoo'}>
          <NavDropdown.Item href="#action/3.1">Shampoos</NavDropdown.Item>
        </Link>
        <NavDropdown.Divider />
        <Link to={'/category/desengrasante'}>
        <NavDropdown.Item href="#action/3.4">Desengrasante</NavDropdown.Item>
        </Link>
      </NavDropdown>
      </Nav>
      <Form inline>
        <CartWidget/>
        <FormControl type="text" placeholder="buscar" className="mr-sm-2" />
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )

}

export default navBar;