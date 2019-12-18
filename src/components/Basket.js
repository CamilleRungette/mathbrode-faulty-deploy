import React, { useState } from 'react';
import {
  Button } from 'reactstrap';
import '../App.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';


let total = 0;
let times = 0;


class Basket extends React.Component {
  constructor(props){
    super(props);
    this.OnBuyClick = this.OnBuyClick.bind(this)
  }
  
  
  OnBuyClick(){
    let items = JSON.stringify(this.props.item);
    fetch('http://localhost:3000/users/order',{
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `user_id=${this.props.user._id}&total=${total}&items=${items}`
    })
  }
  
  render() {
      if (this.props.connected == false || this.props.connected == null){
        return <Redirect to="/" />
      }else if (this.props.item.length == 0){
        return(
          <div>
            <Navbar />
            <div style={{fontFamily:"Raleway", height:"75vh"}}>
              <div style={{textAlign:"center", fontSize:"3.3em"}}>
                <p>Mon Panier</p>
              </div>
              <div style={{height:"5em"}}></div>

            <div style={{fontSize:"2em", textAlign:"center"}}>
              <p>Ton panier est vide </p>
             <Link to="/items"><Button style={{backgroundColor:"#1B263B"}}> Continuer mes achats</Button> </Link>
            </div>

            </div>
            <Footer />
          </div>
        )
      } else {
        console.log("STORE FROM BASKET", this.props.item)
        for (let i=0; i<this.props.item.length; i++){
          total = total + this.props.item[i].price
          times += 1
        } 
   return(
    <div style={{fontFamily:"Raleway"}}>
      <Navbar />
            <div style={{fontFamily:"Raleway"}}>
            <div style={{textAlign:"center", fontSize:"3.3em"}}>
              <p>Mon Panier</p>
            </div>
            <div style={{height:"5em"}}></div>
      {this.props.item.map((item, i) => (
            <div className="col-lg-8 border" style={{display:"flex", alignItems:"center", margin:"auto", fontSize:"1.3em", paddingRight:"3em", height:"13em"}}>
            <img src={item.photo} className="col-4" style={{marginLeft:"-1.5em", height:"11em", objectFit:"contain"}} alt="Alt text" /> 
              <div className="col-5">
                <p >{item.name}</p>
              </div>
              <div className="col-3">
                <p >{item.price} €</p>
              </div> 
              <div className="col-2">
                <FontAwesomeIcon onClick={() => this.props.onDeleteClick(i)} icon={faTrashAlt} />
              </div> 
            </div>  
          )      
        )}
        </div>
      <div className="col-8 border" style={{margin:"auto", display:"flex", paddingTop:"0.3em", fontSize:"1.3em", textAlign:"right"}}>
        <p className="col-9">Total:</p>
        <p className="col-3">{total} €</p>
      </div>
      <div style={{height:"5em"}}></div>
      <div className="d-flex justify-content-center col-lg-12">  
        <div className="justify-content-center col-lg-6">          
          <Link to="/creations" ><Button color="secondary">Continuer mes Achats</Button></Link>
        </div>
        <div>
         <Link to="/"> <Button color="secondary" onClick={this.OnBuyClick}>Confirmer</Button></Link>
        </div>
        <div style={{height:"5em"}}></div>  
      </div>
      <div style={{height:"5em"}}></div>

      <Footer />
    </div>
)}
   }
}

function mapStatetoProps(state){
  return  {connected: state.user.isUserExist,
          user: state.user.userSigned,
          item: state.item}
}

function mapDispatchToProps(dispatch){
  console.log("DELETE FROM BASKET", dispatch)
  return {
    onDeleteClick: function(position){
      console.log(position)
      dispatch({type: 'delete', position: position})
    }
  }
}


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Basket);

