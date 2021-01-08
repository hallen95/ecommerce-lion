import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer greeting={"Tarea completada!"} />
    </div>
  );
}

export default App;
