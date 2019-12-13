import React from 'react';
import {connect} from 'react-redux';
import {  Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink,} from 'reactstrap';
import {Link} from 'react-router-dom'



class Navigbar extends React.Component{
     
  render(){
    return(

<div className="row" >

    <Navbar  light expand="md" style={{fontFamily:"Raleway", width: "90%", height:"7em" , display:"flex", justifyContent:"space-between", margin:"auto"}}>
        <div style={{textAlign:"right"}}>
            <NavbarBrand href="/">
              <img src="./logo.png" style={{width:"9em"}} />
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
                  <Button color="secondary" href="/login">Se Connecter</Button>
            </Nav>
        </div>
    </Navbar>

</div>

        )}
}

function mapStatetoProps(state){
  return  {user: state.user}
}

export default connect(
  mapStatetoProps,
  null
)(Navigbar);