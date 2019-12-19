import React, { useState } from 'react';
import {  Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class Navigbar extends React.Component{
    render(){
        return(

<div className="row" style={{marginLeft:"0px",marginRight:"0px"}}>

    <Navbar  light expand="md" style={{fontFamily:"Raleway", width: "95%", height:"12*5em" , display:"flex", justifyContent:"space-between", margin:"auto",padding:"0"}}s>
        <div style={{textAlign:"right"}}>
            <NavbarBrand>
            <Link to="/" ><img src="/logo bis.png" style={{width:"6em"}} /> </Link>
            </NavbarBrand>
        </div>

        <div xs="10">
            <Nav navbar style={{fontSize:"1.2em"}}>
                <NavItem>
                <Link to="/dashboard" class="navigbar nav-link">Accueil</Link>
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
                <Button color="secondary" style={{fontSize:"1em"}}>Se déconnecter</Button>
            </Nav>
        </div>
    </Navbar>

</div>

        )}
}


export default Navigbar