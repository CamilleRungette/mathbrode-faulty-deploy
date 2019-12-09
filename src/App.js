import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Creations from './Creations'
import ProduitMini from './ProduitMini'

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Home />
        <Creations />
      </div>  

    </div>
  );
}

export default App;
