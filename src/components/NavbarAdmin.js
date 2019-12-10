import React, { useState } from 'react';
import {  Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class Navigbar extends React.Component{
    render(){
        return(

<div className="row" >

    <Navbar  light expand="md" style={{fontFamily:"Raleway", width: "90%", height:"8em" , display:"flex", justifyContent:"space-between", margin:"auto"}}>
        <div style={{textAlign:"right"}}>
            <NavbarBrand href="/">
                <FontAwesomeIcon icon={faStar} /><span className= "offset-1" style={{fontSize:"2em"}} >Mathbrode</span>
            </NavbarBrand>
        </div>

        <div >
            <Nav navbar style={{fontSize:"1.2em"}}>
                <NavItem>
                <Link to="/dashboard" class="navigbar nav-link">Acceuil</Link>
                </NavItem>
                <NavItem>
                <Link to="/orderTracking" class="navigbar nav-link">Commandes et suivi</Link>
                </NavItem>
                <NavItem>
                <Link to="/messaging" class="navigbar nav-link">Messagerie</Link>
                </NavItem>
                <NavItem>
                <Link to="/stock" class="navigbar nav-link">Liste du stock</Link>
                </NavItem>
                <Button color="secondary">Se déconnecter</Button>
            </Nav>
        </div>
    </Navbar>

</div>

        )}
}


export default Navigbar