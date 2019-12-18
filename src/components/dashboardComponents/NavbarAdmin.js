import React, { useState } from 'react';
import {  Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


class Navigbar extends React.Component{
    render(){
        return(

<div className="row" >

    <Navbar  light expand="md" style={{ fontFamily:"Raleway", width: "90%", height:"8em" , display:"flex", justifyContent:"space-between", margin:"auto"}}>
        <div style={{textAlign:"right"}}>
            <NavbarBrand>
            <img src="/logo.png" style={{width:"9em"}} />
            </NavbarBrand>
        </div>

        <div >
            <Nav navbar style={{fontSize:"1.2em", width:"40em", justifyContent:"space-around" }}>
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
                <Button color="secondary">Se déconnecter</Button>
            </Nav>
        </div>
    </Navbar>

</div>

        )}
}


export default Navigbar