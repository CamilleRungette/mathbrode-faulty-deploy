import React from 'react';
import {
  Button } from 'reactstrap';
import '../App.css'
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';



class Basket extends React.Component {
  constructor(props){
    super(props);
    this.state={
      total: 0,
      items: []
    }
  }
  
  componentDidMount(){
    this.setState({items: this.props.item})
  }
  
  render() {
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
        for (let i=0; i<this.props.item.length; i++){
          this.state.total = this.state.total + this.props.item[i].price
          console.log("VOILA LE PRIX DE L'Item;", this.props.item[i].price)
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
                <Button style={{backgroundColor:"#1b263b", color:"white"}} ><FontAwesomeIcon onClick={() => this.props.onDeleteClick(i)} icon={faTrashAlt} /> </Button>
              </div> 
            </div>  
          )      
        )}
        </div>
      <div className="col-8 border" style={{margin:"auto", display:"flex", paddingTop:"0.3em", fontSize:"1.3em", textAlign:"right"}}>
        <p className="col-9">Total:</p>
        <p className="col-3">{this.state.total} €</p>
      </div>
      <div style={{height:"5em"}}></div>
      <div className="d-flex justify-content-center col-lg-12">  
        <div className="justify-content-center col-lg-6">          
          <Link to="/creations" ><Button color="secondary" >Continuer mes Achats</Button></Link>
        </div>
        <div>
         <Link to="/checkout"> <Button style={{backgroundColor:"#1B263B", fontSize:"1.2em"}} onClick={() => this.props.onOrderClick(this.state.total)} >Confirmer</Button></Link>
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
    onOrderClick: function(total){
      dispatch({type: 'payOrder', total: total})
    }
  }
}


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Basket);

