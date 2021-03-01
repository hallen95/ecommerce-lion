import React from 'react';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Cart from './components/cart/Cart';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Switch>  
          <Route exact path='/'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/categories/:nombre/:categoryId'>
            <ItemListContainer/>
          </Route>
          <Route exact path='/item/:itemId'>
            <ItemDetailContainer/>
          </Route>
          <Route exact path='/cart'>
            <Cart/>
          </Route>
        </Switch>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
