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

<div className="row justify-content-center">
    <div className="col-lg-10">

        <div className="text-block-black">
            <p>Je me présente</p>
        </div>

<div className="row justify-content-center">
        <img src="presentation.png" className=" col-lg-4" alt="Alt text" />
        
        <p className="presentation col-lg-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
