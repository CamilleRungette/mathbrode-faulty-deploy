import React, {Component} from 'react';
import {CardElement} from 'react-stripe-elements';
import Navbar from './Navbar'
import Footer from './Footer'
import {Button} from 'reactstrap'
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false, redirect: false};
    this.submit = this.submit.bind(this);
    this.RedirectMethod = this.RedirectMethod.bind(this)
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token)
    let response = await fetch("http://localhost:3000/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok){

     this.setState({complete: true});
     
    
       let items = JSON.stringify(this.props.item);
       fetch('http://localhost:3000/users/order',{
         method: 'POST',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
         body: `user_id=${this.props.user._id}&total=${this.props.total.total}&items=${items}`
       },
       this.props.onResetClick()
       )
    }
  }



  RedirectMethod() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
    console.log("lalalalalalaal", this.props.total)

    if (this.state.complete){
      this.RedirectMethod()
      return(
        <div style={{fontFamily:'Raleway'}}>
          <Navbar />
          <div style={{height:'75vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <h1> Commande validée ! </h1>
            <p>Vous allez être redirigé dans quelque secondes ... </p>
            {this.state.redirect === true? (<Redirect to='/'/>):(false ) }  
          </div>
          <Footer/>
      </div>
      )
      }

    return (
      <div style={{fontFamily:'Raleway'}}>
        <Navbar/>
          <div style={{height:"85vh"}}>
            <div style={{height:'10em'}}></div>
            <h1 style={{textAlign:'center', fontSize:'3.5em'}}>Paiement</h1>
            <div style={{height:'8em'}}></div>
              <div className="border" style={{width:'50%', margin:'auto', padding:'2em', fontSize:'1.2em', display:'flex', flexDirection:"column"}}>
                <h3 style={{textAlign:"center"}}>Montant de la commande:  {this.props.total.total} €</h3> <br/>
                <div style={{width:"80%", margin:"auto"}}>
                  <h5 style={{marginBottom:"0.4em"}}>Récapitulatif:</h5>
                  {this.props.item.map((item, i) => (
                    <div className="border" style={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingRight:'1em'}}>
                    <img src="market.jpg" style={{width:"6em"}} />
                      <p> {item.name}</p>
                      <p> {item.price} €</p>
                    </div>
                  ))}
                </div>
                <br/>
                  <div style={{width:"60%", margin:'auto', marginBottom:'1em' }}>
                    <CardElement />
                  </div> <br/>
                  <div style={{textAlign:"center"}}>
                    <Button onClick={this.submit} style={{backgroundColor:"#1b263b"}} >Payer</Button>
                  </div>
              </div>
          </div>
        <Footer />
      </div>
    );
  }
}

function mapStatetoProps(state){
  return  {user: state.user.userSigned,
          item: state.item,
          total: state.total
         }
}


function mapDispatchToProps(dispatch){
  console.log("DELETE FROM BASKET", dispatch)
  return {
    onResetClick: function(){
      console.log("SENDING CALL TO RESET METHOD")
      dispatch({type: 'reset', })
    }
  }
}


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(CheckoutForm);

