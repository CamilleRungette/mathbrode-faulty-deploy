import React from 'react';
import {Button} from 'reactstrap';
import '../App.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';

let modalStyle={
  width:"50em",
  backgroundColor: "white",
  fontFamily: "Raleway"
}


class Basket extends React.Component {
  constructor(props){
    super(props);
    this.state={
      total: 0,
      items: [],
      in_person: false,
      shipping_fee: 0,
    }
  }
  
  componentDidMount(){
    this.setState({items: this.props.item})
    for (let i=0; i<this.props.item.length; i++){
      this.state.total = this.state.total + this.props.item[i].price
      this.state.shipping_fee = this.state.shipping_fee + this.props.item[i].shipping_fee
    } 
  }  

  render() {
    console.log(this.props.user)
      if (this.props.connected == false || this.props.connected == null){
        return <Redirect to="/" />
      }else if (this.props.item.length == 0){
        return(
          <div>
            <Navbar />
            <div style={{fontFamily:"Raleway", height:"75vh"}}>
            <div style={{height:"10em"}}></div>
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
      if (this.state.in_person === false) {
        console.log("coucou", this.state.shipping_fee)
        this.state.total = this.state.total + this.state.shipping_fee
        console.log(this.state.total)
      } else{
        this.state.total = this.state.total - this.state.shipping_fee
      }
   return(
    <div style={{fontFamily:"Raleway"}}>
      <Navbar/>
            <div style={{fontFamily:"Raleway"}}>
            <div style={{height:"10em"}}></div>

            <div style={{textAlign:"center", fontSize:"3.3em"}}>
              <p>Mon Panier</p>
            </div>
            <div style={{height:"5em"}}></div>
      {this.props.item.map((item, i) =>(
            <div className="col-lg-8 border" style={{display:"flex", alignItems:"center", margin:"auto", fontSize:"1.3em", paddingRight:"3em", height:"13em"}}>
            <img src={item.photo} className="col-4" style={{marginLeft:"-1.5em", height:"11em", objectFit:"contain"}} alt="Alt text" /> 
                <div className="col-3">
                <p >{item.name}</p>
              </div>
              <div className="col-2">
                <p >{item.price} €</p>
              </div> 
              {this.state.in_person === false ?(
              <div className="col-3">
                {item.shipping_fee} €<br/>
                (frais de port)
              </div>
              ):(
                <div className='col-3'></div>
              )}
              <div className="col-2">
                <Button style={{backgroundColor:"#1b263b", color:"white"}} ><FontAwesomeIcon onClick={() => this.props.onDeleteClick(i)} icon={faTrashAlt} /> </Button>
              </div> 
            </div>  
          )      
        )}
        </div>
      <div className="col-8 border" style={{margin:"auto", display:"flex", paddingTop:"0.3em", fontSize:"1.3em", textAlign:"right", alignItems:'center'}}>
      <p  className="col-4"><input type="checkbox" onClick={() => this.setState({in_person: !this.state.in_person})}/> Remise en main propre</p>
        <p className="col-5">Total:</p>
        <p className="col-3">{this.state.total} €</p>
      </div>
      <div className="col-8 border" style={{margin:"auto", display:"flex", textAlign:"center", paddingTop:"0.3em", fontSize:"1.3em", alignItems:'center'}}>
        <p className="offset-1 col-2" >Livraison: </p>
        <p className="offset-2 col-6">{this.props.user.address} - {this.props.user.zip_code} {this.props.user.city} - {this.props.user.details} </p>
         <Link to="/profil"> <Button style={{backgroundColor:"#1b263b", color:"white", marginLeft:'2em'}}><FontAwesomeIcon icon={faEdit} /></Button></Link>
      </div>


      <div style={{height:"5em"}}></div>
      <div className="d-flex justify-content-center col-lg-12">  
        <div className="justify-content-center col-lg-6">          
          <Link to="/creations" ><Button color="secondary" >Continuer mes Achats</Button></Link>
        </div>
        <div>
         <Link to="/checkout"> <Button style={{backgroundColor:"#1B263B", fontSize:"1.2em"}} onClick={() => this.props.onOrderClick(this.state.total, this.state.in_person)} >Confirmer</Button></Link>
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
    },
    onOrderClick: function(total, in_person){
      dispatch({type: 'payOrder', total: total, in_person: in_person})
    }
  }
}


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Basket);

