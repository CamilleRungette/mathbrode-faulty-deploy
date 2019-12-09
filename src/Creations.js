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
import ProduitMini from './ProduitMini'
import { render } from '@testing-library/react';




class Creations extends React.Component {
  


  render() {

    var rows = [];
    for (var i=0; i<9; i++) {
        rows.push(<ProduitMini key={i} />);
    }
    

  

  return (
  



    <div className="row">
        <div className="col-lg-12">
      
      
              <img className="col-lg-10"></img>

              <div className="text-block-black">
              <p>Mes Créations</p>
              <div className="row">
              {rows}
              </div>
              <Button color="secondary">en voir plus...</Button>
              </div>


        </div>
    </div>
    
    







  
 

  );

}

}


export default Creations;