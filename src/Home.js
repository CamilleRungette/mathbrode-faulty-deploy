import React, { useState } from 'react';
import {
  Button,
  CardTitle,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Text
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './App.css'




class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {isOpen:false}
  }
 
  toggle(){
    this.setState(!this.state.isOpen);
  }

  render(){

    return (
      <div>
        
          
        <div className="row">
          <Navbar color="light" light expand="md">
              
                
                
                <NavbarBrand href="/">
                <FontAwesomeIcon icon={faStar} /><span className= "offset-1" >Mathbrode</span>
                </NavbarBrand>
      
              
      
          
            
        
                <Nav navbar>
      
                  <NavItem>
                    <NavLink href="/components/">Accueil</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Projet</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Evénements</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/components/">Contact</NavLink>
                  </NavItem>
                    <Button color="secondary">Se Connecter</Button>
                    
                </Nav>
                
            
          </Navbar>
      
          </div>
          <div className="row">
              <div className="col-lg-12">
            
            
                    <img src="background 1.png"></img>
      
                    <div className="text-block">
                    <p>Broderie <br/> Moderne</p>
                    </div>
      
      
              </div>
          </div>
      
      
        </div>
      
      
      
      
        );


  }
  
}

export default Home;