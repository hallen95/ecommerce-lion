import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from './components/cart/Cart'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>  
        <Route exact path='/'>
          <ItemListContainer/>
        </Route>
        <Route exact path='/category/categoryId'>
          <ItemListContainer/>
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer />
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
