import React from 'react';
import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>  

  )


}

export default App;
