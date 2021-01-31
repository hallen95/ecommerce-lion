import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>  
        <Route exact path='/'>
          <ItemListContainer/>
        </Route>
        <Route path='/category/categoryId'>
          <ItemListContainer/>
        </Route>
        <Route path='/item/:id'>
          <ItemDetailContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
