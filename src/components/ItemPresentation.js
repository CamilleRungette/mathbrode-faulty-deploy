import React  from 'react';
import {  Button} from 'reactstrap';
import '../App.css'
import { Col, Row, Form, FormGroup, Input, FormControl } from 'reactstrap';
import {Link, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'
import {connect} from 'react-redux'

class ItemPresentation extends React.Component {
  constructor(props){
    super(props);
    this.sendMessage = this.sendMessage.bind(this)
    this.state={
      name: '',
      desc: '',
      copy:'',
      photo: '',
      price: '',
      shipping_fee: '',
      size:'',
      userName: '',
      userEmail: '',
      content: '',
      item_id: '',
      item:[],
        }
    console.log("PROPS", this.props.match.params.id)  
  }

  componentDidMount(){
    let ctx = this
  fetch(`http://localhost:3000/find-items?name=${this.props.match.params.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        ctx.setState({
          name: data.thisItem.name,
          desc: data.thisItem.description,
          copy: data.thisItem.copy,
          photo: data.thisItem.photo,
          price: data.thisItem.price,
          shipping_fee: data.thisItem.shipping_fee,
          size: data.thisItem.size,
          item_id: data.thisItem._id,
          item: data.thisItem
        })
      })
    }

    sendMessage(){
      if (this.props.user == null){
      fetch('http://localhost:3000/users/create-message',{
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `object=${this.props.match.params.id}&content=${this.state.content}&sender_email=${this.state.userEmail}&sender_name=${this.state.userName}&item_id=${this.state.item_id}`
      })} else if (this.props.user != null){
        fetch('http://localhost:3000/users/create-message',{
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: `object=${this.props.match.params.id}&content=${this.state.content}&sender_email=${this.props.user.email}&sender_name=${this.props.user.first_name}&item_id=${this.state.item_id}&user_id=${this.props.user._id}`
      })
    }
  }

    render() {
   return(
<div>
  <Navbar/>
    <div className="row justify-content-center" style={{fontFamily:"Raleway"}}>
      <div className="col-lg-10" >
      <div style={{height:"5em"}}></div>
        <div>
          <p style={{textAlign:"center", fontSize:"3em"}}>{this.state.name}</p>
        </div>

        <div className="row col-lg-7 border" style={{margin:"auto"}} >
        <div class="hover">
          <div class="zoom">
        <img src={this.state.photo} className=" col-lg-8" style={{height:"40em", objectFit:"contain", margin:"auto"}} alt="Alt text" />
          </div>
        </div>
          <div className="col-lg-9" style={{margin:"auto"}}>
            <div style={{display:"flex", justifyContent:"center"}}>
              <Row> 
                <Col sm={8}>          
                  <p style={{fontSize:"1.5em"}}>{this.state.desc}</p>
                </Col>
                <Col>
                  <p className="" >Info Pratiques :<br/>
                  Prix: {this.state.price}€<br/>
                  Exemplaire: {this.state.copy}<br/>
                  Taille: {this.state.size}
                  </p>
                </Col>
            </Row>          
            </div> 
              <div className="d-flex justify-content-center mb-4" >
              <Button color="secondary" style={{marginRight:"2em"}}> Retour </Button>
                {this.props.user == null ? (
                  <Link to="/login" ><Button style={{backgroundColor:"#1b263b"}}>Ajouter au panier</Button></Link>
                ):(
                  <Button onClick={() => this.props.onBuyClick(this.state.item)} style={{backgroundColor:"#1b263b"}}>Ajouter au panier</Button>
                )}
              </div>
          </div>
        </div>

            <div className="text-block-black-small">
              <p>Une Question?</p>
            </div>
            <Form className="col-lg-9 mx-auto">
              <Row form>
                <Col lg={6}>
                  <FormGroup>
                    {this.props.user == null ?(
                      <Input type="Nom" name="Nom" id="exampleNom" placeholder="Nom" onChange={(e)=> this.setState({userName: e.target.value})}
                      value={this.state.userName}/>
                    ): (
                      <Input type="Nom" name="Nom" id="exampleNom" placeholder="Nom" value={this.props.user.first_name}/>
                    )}
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    {this.props.user == null ?(
                      <Input type="Email" name="Email" id="exampleEmail" placeholder="Email" onChange={(e)=> this.setState({userEmail: e.target.value})}
                      value={this.state.userEmail} />
                    ):(
                      <Input type="Email" name="Email" id="exampleEmail" placeholder="Email" value={this.props.user.email} />
                    )}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input type="textarea" rows="4" name="Message"  onChange={(e)=> this.setState({content: e.target.value})}
                value={this.state.content} />
              </FormGroup>
              <div className="d-flex justify-content-center" >
                <Link to="/"><Button  style={{backgroundColor:"#1b263b"}} onClick={this.sendMessage}>Envoyer</Button> </Link> 
              </div>
            <div style={{height:"5em"}}></div>
            </Form>
      </div>
    </div>
  <Footer/>
</div>
)}
}

function mapStatetoProps(state){
  console.log(state)
  return  {user: state.user.userSigned}
}

function mapDispatchToProps(dispatch){
  return{
    onBuyClick: function(data){
      console.log("info envoyée au reducer", data)
      dispatch({type: 'carted', item: data})
    }
  }
}


export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ItemPresentation);
