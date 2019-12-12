import React, {Component} from 'react';
import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Stock from './components/dashboardComponents/stock';
import Tracking from './components/dashboardComponents/orderTracking';
import Messaging from './components/dashboardComponents/messaging';
import Signin from './components/signin';
import Classes from './components/Classes'
import Events from './components/Events'
import Basket from './components/Basket'
import ItemPres from './components/ItemPresentation'
import Creations from './components/Creations'
import MaxCreations from './components/MaxCreations'



class App extends Component{

  render(){


    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/stock" component={Stock} />
          <Route path="/orderTracking" component={Tracking} />
          <Route path="/messaging" component={Messaging} />
          <Route path="/signin" component={Signin}  />
          <Route path="/classes" component={Classes} />
          <Route path="/events" component={Events} />
          <Route path="/basket" component={Basket} />
          <Route path="/item"  component={ItemPres}/>
          <Route path="/creations" component={Creations}/>
          <Route path="/maxcreations" component={MaxCreations}/>
        </Switch>
      </Router>  

  )}


}

export default App;
