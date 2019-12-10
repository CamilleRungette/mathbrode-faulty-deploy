import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Creations from './Creations'
import ProduitMini from './ProduitMini'
import Dashboard from './dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Home />
        <Creations />
        <Dashboard></Dashboard>
      </div>  

    </div>
  )


}

export default App;
