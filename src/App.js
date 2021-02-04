import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from './CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>  
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/category/:categoryId'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/cart'>
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
