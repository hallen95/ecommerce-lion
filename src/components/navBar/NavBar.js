import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Form, FormControl, NavDropdown } from 'react-bootstrap'
import CartWidget from '../cartWidget/CartWidget'
import { getCategories } from '../../backend/catalog'
import { Link } from 'react-router-dom'
import useCartContext from '../../CartContext'

const NavBar = () => {
  
  const [categories, setCategories] = useState([]);
  
  const {cart} = useCartContext();

  useEffect(() =>{
    getCategories().then((result) => {
      setCategories(result)})
  }, [categories])

  return (
    <Navbar bg="light" expand="lg">
      <Link to={'/'}><Navbar.Brand href="#home">Lion</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Categorias" id="basic-nav-dropdown">                   
          { 
            categories.map((category) => {
            return (
              <NavDropdown.Item key={category.catId}>
                <Link to={`/category/${category.catId}`}>{category.nombre}</Link>
              </NavDropdown.Item> )
            })
          }
        <NavDropdown.Divider />
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

export default NavBar;