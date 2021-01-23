import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetail/ItemDetail'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    < BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <ItemDetailContainer />
      </Route>
      <Route exact path='/item/:id'> 
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
