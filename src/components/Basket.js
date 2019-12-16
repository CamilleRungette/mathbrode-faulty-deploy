import React, { useState } from 'react';
import {
  Button } from 'reactstrap';
import '../App.css'
import {Link, Redirect} from 'react-router-dom';
import BasketItem from './cards/basket-item'
import Navbar from './Navbar'
import Footer from './Footer'
import {connect} from 'react-redux';



class Basket extends React.Component {

    render() {
      let allItemsList = this.props.item.map(function(item, i){
        return <BasketItem key = {i}
        itemCopy={item.copy}
        itemName={item.name}
        itemDesc={item.desc}
        itemPrice={item.price}
        itemShipFee={item.shipping_fee}
        itemSize={item.size}
        itemPhoto={item.photo}
        itemId={item._id}
        />
      })


      if (this.props.connected == false || this.props.connected == null){
        return <Redirect to="/" />
      } else {
        console.log("STORE FROM BASKET", this.props.item, this.props.user)
   return(
    <div style={{fontFamily:"Raleway"}}>
      <Navbar />
      {allItemsList}
      <div className="col-8 border" style={{margin:"auto", display:"flex", paddingTop:"0.3em", fontSize:"1.3em", textAlign:"right"}}>
        <p className="col-9">Total:</p>
        <p className="col-3">X €</p>
      </div>
      <div style={{height:"5em"}}></div>
      <div className="d-flex justify-content-center col-lg-12">  
        <div className="justify-content-center col-lg-6">          
          <Link to="/creations" ><Button color="secondary">Continuer mes Achats</Button></Link>
        </div>
        <div>
          <Button color="secondary">Confirmer</Button>
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
          item: state.item}
}

export default connect(
  mapStatetoProps,
  null
)(Basket);

