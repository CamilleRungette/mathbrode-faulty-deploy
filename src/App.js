import React from 'react';
import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Stock from './components/dashboardComponents/stock';
import Tracking from './components/dashboardComponents/orderTracking';
import Messaging from './components/dashboardComponents/messaging';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/stock" component={Stock} />
          <Route path="/orderTracking" component={Tracking} />
          <Route path="/messaging" component={Messaging} />
        </Switch>
      </Router>  

  )


}

export default App;
