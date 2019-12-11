import React, {Component} from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faCalendarAlt, faHandshake } from '@fortawesome/free-solid-svg-icons'
import {Modal, Form} from 'react-bootstrap'
import '../App.css'

let modalStyle={
  width:"50em",
  backgroundColor: "white",
  fontFamily: "Raleway"
}

class Service extends Component{
constructor(){
  super();
  this.handleClose = this.handleClose.bind(this)
  this.handleShow = this.handleShow.bind(this)
  this.sendMessage = this.sendMessage.bind(this)
  this.state={
    show: false,
    SendMessageContent: '',
    SendMessageEmail: '',
  }
}

  sendMessage(){
    this.setState({show:false});
    fetch('http://localhost:3000/users/create-message', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `object=personalised_project&content=${this.state.SendMessageContent}&sender_email=${this.state.SendMessageEmail}`
    })
  }

  handleClose(){
    this.setState({show: false})
  }

  handleShow(){
    this.setState({show:true})
  }

  render(){
    return(
      <div style={{fontFamily: 'Raleway'}}>
      <h1 style={{fontSize:"3.5em", textAlign:"center"}} > <em>Mes Prestations</em></h1>
      <div style={{height:"10em"}}></div>

      <Col xs="8" style={{margin:"auto"}}>
        <Row style={{fontFamily:"Raleway", display:"flex", justifyContent:"space-around"}}>

          <Col xs="3">
            <Card style={{backgroundColor:"#EDF3F7", width:"20em", height:"14em", padding:"1em", border:"none"}}>
              <CardBody >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <CardTitle style={{ fontSize:"1.2em"}} ><strong>Atelier d'initiation</strong> </CardTitle>
                <FontAwesomeIcon icon={faCalendarAlt} className={"fa-2x"}/>
                </div>
                  <CardText>Je vous propose de vous initier aux bases de la broderie pendant un cours de 2h. Réservez-votre créneau</CardText>
                </CardBody>
            </Card>
          </Col>

          <Col xs="3">
            <Card style={{backgroundColor:"#EDF3F7", width:"20em", height:"14em", padding:"1em", border:"none"}}>
              <CardBody onClick={this.handleShow} >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <CardLink style={{ fontSize:"1.2em"}} className={"link"} ><strong>Projets personnalisés</strong> </CardLink>
                <FontAwesomeIcon icon={faCut} className={"fa-2x"}/>
                </div>
                  <CardText>Une idée de modèle ? Vous pouvez me contacter pour des projets personnels. Dessins, prénom, couronnes .. Demandez-moi</CardText>
                </CardBody>
            </Card>
          </Col>

          <Col xs="3">
            <Card style={{backgroundColor:"#EDF3F7", width:"20em", height:"14em", padding:"1em", border:"none"}}>
              <CardBody >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <CardTitle style={{ fontSize:"1.2em"}} ><strong>Rencontrez-moi</strong> </CardTitle>
                <FontAwesomeIcon icon={faHandshake} className={"fa-2x"}/>
                </div>
                  <CardText>Venez me rencontrer directement sur les marchés auxquels je participe régulièrement.</CardText>
                </CardBody>
            </Card>
          </Col>

        </Row>
     
       
       <Modal show={this.state.show} onHide={this.handleClose} className="col-lg-10" >
         <div style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Message pour projet personnalisé</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control type="email"onChange={(e)=> this.setState({SendMessageEmail: e.target.value})}
              value={this.state.SendMessageEmail} />
            </Form.Group>

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
        </Col>
        </div>
    )
  }
}





export default Service;