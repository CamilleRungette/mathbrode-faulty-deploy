import React from 'react';
import './App.css';
import Home from './Home'
import Creations from './Creations'
import Dashboard from './components/dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
        <Switch>
          <Navigbar/>
          <Home />
          <Creations />
          <Dashboard/>
        </Switch>
      </Router>  

  )


}

export default App;
