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
import '../App.css'
import ProduitMini from './ProduitMini'
import { render } from '@testing-library/react';


class Presentation extends React.Component {


    render() {

    

    return(

<div className="row justify-content-center" style={{fontFamily:"Raleway"}}>
    <div className="col-lg-8">
      <h1 style={{fontSize:"4em", textAlign:"center"}}> <em>Je me présente</em></h1>
      <div style={{height:"10em"}}></div>

<div className="row justify-content-center" style={{ display:"flex", alignItems:"center"}} >
        <img src="presentation.png" className=" col-lg-5" style={{marginRight:"4em"}} alt="Alt text" />
        
        <p className="presentation col-lg-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        <div className="row justify-content-center">
            <Button color="secondary">me contacter</Button>
        </div>
        </p>
      
</div>



    </div>
</div>

    );


}


}


export default Presentation;
