import React from 'react';
import {connect} from 'react-redux';
import { Button,  Navbar,  NavbarBrand,  Nav,  NavItem,  NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
import '../script'



class Navigbar extends React.Component{
  constructor(props){
    super(props);
    this.LogOut = this.LogOut.bind(this) 
   }

  LogOut(){
    this.props.onLogOutClick(this.props.connected) 
  }

  render(){
    return(

<div className="row topnav" style={{marginLeft:"0px",marginRight:"0px"}}>

    <Navbar  light expand="md" style={{fontFamily:"Raleway", width: "95%", height:"12*5em" , display:"flex", justifyContent:"space-between", margin:"auto",padding:"0"}}>
        <div xs="2" style={{textAlign:"right"}}>
            <NavbarBrand>
              <Link to="/"><img src="/logo bis.png" style={{width:"5.3em"}} /> </Link>
            </NavbarBrand>
        </div>

        <div xs="10">
            <Nav navbar style={{fontSize:"1.3em", fontWeight:"bold"}}> 

            {this.props.connected ? (
              <div></div>
            ):(
                <NavItem>
                  <Link to="/"><NavLink>Accueil</NavLink> </Link>
                </NavItem>
            )}

                <NavItem>
                  <Link to="/items"> <NavLink>Articles</NavLink></Link>
                </NavItem>

                <NavItem>
                  <Link to="/events"> <NavLink>Evénements</NavLink></Link>
                </NavItem>

                <NavItem>
                <NavLink id="contact">Contact</NavLink>
                </NavItem>

                
                
                {this.props.connected ? (
                <NavItem>
                  <Link to ="/profil" > <NavLink>Mon profil</NavLink> </Link>
                </NavItem>
                ):(
                  <div></div>
                )}
             

                {this.props.connected ? (
                <NavItem>
                  <Link to ="/myorders" > <NavLink>Mes commandes</NavLink> </Link>
                </NavItem>
                ):(
                  <div></div>
                )}


                <NavItem>
                {this.props.connected ? (
            
                <NavItem>
                  <Link to ="/basket" > <NavLink>Panier</NavLink> </Link>
                </NavItem>
                ):(
                  <div></div>
                )}
                </NavItem>
                

                <NavItem>
                {this.props.connected ? (
                  <div>
                  <Button color="secondary" style={{fontSize:"1em"}} onClick={this.LogOut}>Se Déconnecter</Button>
                  </div>
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