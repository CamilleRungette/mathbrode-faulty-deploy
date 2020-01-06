import React, { Component } from 'react';
import Footer from './Footer'
import Navbar from './Navbar'
import {Button, Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Col, Row } from 'reactstrap';
import {Modal, Form} from 'react-bootstrap'

let modalStyle={
  width:"50em",
  backgroundColor: "white",
  fontFamily: "Raleway",
}


class Classes extends Component{
  constructor(){
    super();
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.sendMessage = this.sendMessage.bind(this)  
    this.state = {
      workshops:[],
      show: false,
      SendMessageContent: '',
      SendMessageEmail: '',
      SendMessagePhoto: '', 
      SendMessageName:'', 
    }
  }

  handleClose(){
    this.setState({show: false})
  }

  handleShow(){
    this.setState({show:true})
  }

  sendMessage(){
    this.setState({show:false});
    fetch('http://localhost:3000/users/create-message', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `object=Atelier&content=${this.state.SendMessageContent}&sender_email=${this.state.SendMessageEmail}&photo=${this.state.SendMessagePhoto}&sender_name=${this.state.SendMessageName}`
    })
  }

  componentDidMount(){
    let ctx = this
    fetch('http://localhost:3000/workshops')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({workshops: data.allWorkshops})
      console.log("THE STATE", ctx.state.workshops)
    })
    .catch(function(error){
      console.log("FAILED")
    });

  }

  render(){
    return(
    <div style={{fontFamily:"Raleway"}}>
      <Navbar/>
      <div style={{height:"8em"}}></div>
      <Col sm={11} style={{margin:"auto"}}>
      <h1 style={{textAlign:"center", fontSize:"3.5em", marginTop:"0.5em"}}>Les Ateliers</h1>
      <div style={{height:"8em"}}></div>
      <div style={{margin:"auto", display:"flex", justifyContent:"space-around"}}>
      {this.state.workshops.map((workshop, i) =>(
        <div>
          <Card style={{ width: '38rem'}}>
          <CardImg variant="top" src={workshop.photo}/>
          <CardBody>
            <CardTitle style={{fontSize:"1.3em", textAlign:"center"}}> <strong> {workshop.title} </strong></CardTitle>
            <br/>
            <CardText style={{fontSize:"1.1em", width:'95%', margin:"auto", textAlign:'justify'}}>
              {workshop.desc}
            </CardText>
          </CardBody>
          <CardBody style={{display:"flex", justifyContent:"space-around", fontSize:'1.2em'}}>
              <CardText > <strong>Prix : </strong> {workshop.price} €</CardText>
              <CardText > <strong>Durée: </strong> {workshop.duration}</CardText>
          </CardBody>
          <ListGroup>
            <ListGroupItem style={{textAlign:"center", fontSize:'1.2em', fontWeight:"bold", cursor:"pointer"}}  onClick={this.handleShow} >Réserver un créneau </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
       ))} 
       </div>
       </Col>
       <div style={{height:"8em"}}></div>

      <Footer />

      <Modal show={this.state.show} onHide={this.handleClose} className="col-lg-10" >
         <div style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Message pour réservation d'atelier</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Nom</Form.Label>
                    <Form.Control type="text"onChange={(e)=> this.setState({SendMessageName: e.target.value})}
                    value={this.state.SendMessageName} />
              </Form.Group>
            </Col>

            <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
                <Form.Control type="email"onChange={(e)=> this.setState({SendMessageEmail: e.target.value})}
                value={this.state.SendMessageEmail} />
            </Form.Group>
            </Col>
            </Row>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" onChange={(e)=> this.setState({SendMessageContent: e.target.value})} 
              value={this.state.SendMessageContent} />
            </Form.Group>
          </Form>
          <Button style={{backgroundColor:"#1B263B", border:"none"}} variant="secondary" onClick={this.sendMessage}> 
              Envoyer
            </Button>
          </Modal.Body>
         </div>
       </Modal>


      
    </div>
    )}
}

export default Classes ;