import React from 'react';
import {
  Button, Row } from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'




class BasketItem extends React.Component {
    render() {
   return(
    <div style={{fontFamily:"Raleway"}}>
      <div style={{textAlign:"center", fontSize:"3.3em"}}>
        <p>Mon Panier</p>
      </div>
      <div style={{height:"5em"}}></div>
      <div className="col-lg-8 border" style={{display:"flex", alignItems:"center", margin:"auto", fontSize:"1.3em", paddingRight:"3em"}}>
      <img src={this.props.itemPhoto} className="col-4" style={{marginLeft:"-1.5em"}} alt="Alt text" /> 
        <div className="col-5">
          <p >{this.props.itemName}</p>
        </div>
        <div className="col-3">
          <p >{this.props.itemPrice} €</p>
        </div> 
        <div className="col-2">
          <FontAwesomeIcon icon={faTrashAlt} />
        </div> 
      </div>  
    </div>
)}
}


export default BasketItem;
