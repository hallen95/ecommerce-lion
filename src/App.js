import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <NavBar />
    <ItemDetailContainer />
    </React.Fragment>
  );
}

export default App;
