import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css';
import CartWidget from '../cartWidget/CartWidget';
import { getFirestore } from '../../firebase';
import { Link } from 'react-router-dom';

const NavBar = () => {
  
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
      const db = getFirestore();
      const categories = db.collection("Category")
      categories.get()
        .then((querySnapshot) => {
        querySnapshot.size === 0 && console.log("No hay resultados")
        let result = querySnapshot.docs.map(doc => {
            return ({
                catId: doc.id,
                ...doc.data()
             })
         })
         setCategories(result)
     })
 }, [  ])

  return (
    <Navbar bg="light" expand="lg">
      <Link to={'/'}><Navbar.Brand>Lion</Navbar.Brand></Link>
      <Navbar.Toggle className="dropdownestilo" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title="Categorias" id="basic-nav-dropdown">                   
          { 
            categories.map((category) => {
            return <Link  className="dropestilo" key={category.catId} to={`/categories/${category.nombre}/${category.catId}`}>{category.key}</Link>
            })
          }
        <NavDropdown.Divider />
        </NavDropdown>
        </Nav>
        <CartWidget/>
      </Navbar.Collapse>
    </Navbar>
    )

  }

export default NavBar;