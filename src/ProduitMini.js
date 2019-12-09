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



const ProduitMini = (props) => {
const [isOpen, setIsOpen] = useState(false);
  
const toggle = () => setIsOpen(!isOpen);
  
return (


    <div className="col-lg-4 mb-3">
    <img src="background 1.png"></img>
    </div>


    )
}
export default ProduitMini;