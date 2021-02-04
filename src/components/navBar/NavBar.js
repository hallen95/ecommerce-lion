import React from 'react'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'
import { Link } from 'react-router-dom'
import useCartContext from '../../CartContext'

const NavBar = () => {
const { getItemCount } = useCartContext();

return (
  <Navbar bg="light" expand="lg">
    <Link to={'/'}><Navbar.Brand href="#home">Lion</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Productos</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <Nav.Link href="#link">Categorias</Nav.Link>
      </Nav>
      <Form inline>
        <CartWidget/> <div>{getItemCount()}</div>
        <FormControl type="text" placeholder="buscar" className="mr-sm-2" />
      </Form>
    </Navbar.Collapse>
  </Navbar>
  )

}

export default NavBar;