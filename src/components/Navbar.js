import React from 'react';
import {connect} from 'react-redux';
import { Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'



class Navigbar extends React.Component{
  constructor(){
    super();
    this.LogOut = this.LogOut.bind(this) 
   }

  LogOut(){
    this.props.onLogOutClick(this.props.connected) 
  }
  render(){
    return(

<div className="row" style={{marginLeft:"0px",marginRight:"0px"}}>

    <Navbar  light expand="md" style={{fontFamily:"Raleway", width: "95%", height:"12*5em" , display:"flex", justifyContent:"space-between", margin:"auto"}}>
        <div xs="2" style={{textAlign:"right"}}>
            <NavbarBrand href="/">
              <img src="/logo bis.png" style={{width:"9em"}} />
            </NavbarBrand>
        </div>

        <div xs="10">
            <Nav navbar style={{fontSize:"1.8em"}}>
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
                <NavItem>
                {this.props.connected ? (
                  <Button color="secondary" onClick={this.LogOut}>Se Déconnecter</Button>
                ):(
                  <Button color="secondary" style={{fontSize:"1em"}} href="/login">Se Connecter</Button>
                )}
                </NavItem>
            </Nav>
        </div>
    </Navbar>

</div>

        )}
}

function mapDispacthToProps(dispatch){
  return{
    onLogOutClick: function(data){
      dispatch({type: 'logout', connected: data})
    }
  }
}

function mapStatetoProps(state){
  return  {user: state.user.userSigned, connected: state.user.isUserExist}
}


export default connect(
  mapStatetoProps,
  mapDispacthToProps
)(Navigbar);