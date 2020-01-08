import React, {Component} from 'react';
import {CardElement, injectStripe, Elements, StripeProvider} from 'react-stripe-elements';
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
    this.redirectMethod = this.RedirectMethod.bind(this)
  }

  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token)
    let response = await fetch("http://localhost:3000/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) this.setState({complete: true});
  }

  redirectMethod() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000)
  }

  componentWillUnmount() {
    clearTimeout(this.id)
  }

  render() {
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
              <div className="border" style={{width:'50%', margin:'auto', padding:'2em', fontSize:'1.2em', height:'13em', display:'flex', flexDirection:"column"}}>
                <h3 style={{textAlign:"center"}}>Montant de la commande:  XX €</h3> <br/>
                  <div style={{width:"80%", margin:'auto', marginBottom:'1em' }}>
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

// function mapStatetoProps(state){
//   return  {connected: state.user.isUserExist,
//           user: state.user.userSigned,
//           item: state.item}
// }

// export default connect(
//   mapStatetoProps,
//   null
// )(CheckoutForm)

var Purchase = injectStripe(CheckoutForm);
    
export default class StripeCheckout extends Component { 

  render () {
    return(
    <StripeProvider apiKey="pk_test_XzsmxxXobCTTVQyEjOjzFz3600AqJATxPX">
        <div className="example">
          <Elements>
            <Purchase />
          </Elements>
        </div>
      </StripeProvider>
    );
  }
}