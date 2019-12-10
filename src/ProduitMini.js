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



class ProduitMini extends React.Component {
  


  render() {

  
  
return (


  <div className="col-lg-4 mb-3">
      
    <div className="productTitle"></div>

      <img src="background 1.png"></img>
      <div className="transparentFilter">
      <div className="text-block-mini">
        <p>Nom<br/>12x35cm</p>
      </div>

      
      
    </div>
  </div>



    )
}

}
export default ProduitMini;