import React from 'react';
import {  Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink,} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'



class Navigbar extends React.Component{
   
  pageScroll(){
    window.setTimeout(function(){
      window.scrollBy(0,2500);

    }, 500)
  } 
  
  
  
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
                <NavLink href="/">Accueil</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/components/">Projet</NavLink>
                </NavItem>
                <NavItem>
                <Link to="/events" ><NavLink>Evénements</NavLink></Link> 
                </NavItem>
                <NavItem>
                <NavLink onClick={this.pageScroll}>Contact</NavLink>
                </NavItem>
                <Button color="secondary">Se Connecter</Button>
            </Nav>
        </div>
    </Navbar>

</div>

        )}
}


export default Navigbar