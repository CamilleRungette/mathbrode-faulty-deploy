import React, { useState } from 'react';
import {  Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink,} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Navigbar extends React.Component{
  constructor(props){
    super(props);
    this.LogOut = this.LogOut.bind(this) 
   }

  LogOut(){
    this.props.onLogOutClick(this.props.connected) 
  }

    render(){
      if (this.props.adminConnected == false || this.props.adminConnected == null){
        return (
          <div className="row" style={{marginLeft:"0px",marginRight:"0px"}}>
              <Navbar  light expand="md" style={{fontFamily:"Raleway", width: "95%", height:"12*5em" , display:"flex", justifyContent:"space-between", margin:"auto",padding:"0"}}s>
                  <div style={{textAlign:"right"}}>
                      <NavbarBrand>
                      <Link to="/" ><img src="/logo bis.png" style={{width:"6em"}} /> </Link>
                      </NavbarBrand>
                  </div>

                  <div xs="10">
                      <Nav navbar style={{fontSize:"1.2em"}}>
                        <Link to="/loginadmin" >  <Button color="secondary">Se connecter</Button> </Link>
                      </Nav>
                  </div>
              </Navbar>
          </div>
        )
      }

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
                <Link to="/loginadmin"><Button color="secondary"  onClick={this.LogOut}>Se déconnecter</Button> </Link>
            </Nav>
        </div>
    </Navbar>

</div>

        )}
}

function mapDispacthToProps(dispatch){
  return{
    onLogOutClick: function(data){
      dispatch({type: 'adminLogout', connected: data})
    }
  }
}


function mapStatetoProps(state){
  console.log("======>", state)
  return {adminConnected: state.admin.isAdminExist}
}


export default connect(
  mapStatetoProps,
  mapDispacthToProps
  )(Navigbar)