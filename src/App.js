import React, {Component} from 'react';
import './App.css';
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Stock from './components/dashboardComponents/stock';
import Tracking from './components/dashboardComponents/orderTracking';
import Messaging from './components/dashboardComponents/messaging';
import Login from './components/Login';
import Classes from './components/Classes'
import Events from './components/Events'
import Basket from './components/Basket'
import ItemPres from './components/ItemPresentation'
import Items from './components/Items'
import Exemple from './components/Exemple'
import Creations from './components/Creations'
import MaxCreations from './components/MaxCreations'
import {createStore, combineReducers}  from 'redux';
import {Provider} from 'react-redux';
import user from './components/Reducer/user.reducer';
import item from './components/Reducer/cart.reducer'
const store = createStore(combineReducers({user, item}));



class App extends Component{

  render(){


    return (
     <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/stock" component={Stock} />
          <Route path="/orderTracking" component={Tracking} />
          <Route path="/messaging" component={Messaging} />
          <Route path="/login" component={Login}  />
          <Route path="/classes" component={Classes} />
          <Route path="/events" component={Events} />
          <Route path="/basket" component={Basket} />
          <Route path="/item/:id" exact component={ItemPres}/>
          <Route path="/items" component={Items} />
          <Route path="/exemple" component={Exemple} />
          <Route path="/creations" component={Creations}/>
          <Route path="/maxcreations" component={MaxCreations}/>
        </Switch>
      </Router>  
    </Provider>
  )}


}

export default App;
