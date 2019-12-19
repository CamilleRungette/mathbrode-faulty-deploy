import React, {Component} from 'react';
import { Row, Col, Card, CardText, CardBody,
  CardTitle, Button, CardLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faCalendarAlt, faHandshake } from '@fortawesome/free-solid-svg-icons'
import {Modal, Form} from 'react-bootstrap'
import '../App.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';


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
  this.onDrop = this.onDrop.bind(this);
  this.uploadMessageImage = this.uploadMessageImage.bind(this);
  this.state={
    show: false,
    SendMessageContent: '',
    SendMessageEmail: '',
    SendMessagePhoto: '',
  }
}

onDrop(picture) {
  this.setState({
      CreateItemPhoto: this.state.CreateItemPhoto.concat(picture),
  });
}

  sendMessage(){
    this.setState({show:false});
    fetch('http://localhost:3000/users/create-message', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `object=Projet_personnalisé&content=${this.state.SendMessageContent}&sender_email=${this.state.SendMessageEmail}&photo=${this.state.SendMessagePhoto}`
    })
  }

  handleClose(){
    this.setState({show: false})
  }

  handleShow(){
    this.setState({show:true})
  }

  async uploadMessageImage(e){
    const files = e.target.files
    const data= new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'camille')
    this.setState({loading: true})
    const res = await fetch('https://api.cloudinary.com/v1_1/dduugb9jy/image/upload', {
        method: 'POST',
        body: data
      })
    const file = await res.json()
    
    this.setState({SendMessagePhoto: file.secure_url})
    this.setState({loading: false})
  }

  render(){
    return(
    <div style={{fontFamily: 'Raleway'}}>
        <h1 style={{fontSize:"3.5em", textAlign:"center"}} > <em>Mes Prestations</em></h1>

        <div style={{height:"10em"}}></div>



        <Row style={{fontFamily:"Raleway", display:"flex", justifyContent:"space-around"}}>
          

          <Col xs="12" lg="4" style={{display:"flex", justifyContent:"center",marginBottom:"2em"}}>
            <Card style={{cursor:"pointer", backgroundColor:"#EDF3F7", width:"17em", height:"17em", padding:"1em", border:"none"}}>
              <CardBody >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <Link to="/classes" ><CardTitle style={{ fontSize:"1.2em", color:"black"}} ><strong>Atelier d'initiation</strong> </CardTitle></Link>
                <FontAwesomeIcon icon={faCalendarAlt} className={"fa-2x"}/>
                </div>
                  <CardText>Je vous propose de vous initier aux bases de la broderie pendant un cours de 2h. Réservez-votre créneau</CardText>
                </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="4" style={{display:"flex", justifyContent:"center",marginBottom:"2em"}}>
            <Card style={{cursor:"pointer", backgroundColor:"#EDF3F7", width:"17em", height:"17em", padding:"1em", border:"none"}}>
              <CardBody onClick={this.handleShow} >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <CardLink style={{ fontSize:"1.2em"}} ><strong>Projets personnalisés</strong> </CardLink>
                <FontAwesomeIcon icon={faCut} className={"fa-2x"}/>
                </div>
                  <CardText>Une idée de modèle ? Vous pouvez me contacter pour des projets personnels. Dessins, prénom, couronnes .. Demandez-moi</CardText>
                </CardBody>
            </Card>
          </Col>

          <Col xs="12" lg="4" style={{display:"flex", justifyContent:"center",marginBottom:"2em"}}>
            <Card style={{cursor:"pointer", backgroundColor:"#EDF3F7", width:"17em", height:"17em", padding:"1em", border:"none"}}>
              <CardBody >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <Link to="/events"> <CardTitle style={{ color: "black", fontSize:"1.2em"}} ><strong>Rencontrez-moi</strong> </CardTitle> </Link>
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
              {this.props.user == null ? (
                <Form.Control type="email"onChange={(e)=> this.setState({SendMessageEmail: e.target.value})}
                value={this.state.SendMessageEmail} />
              ): (
                <Form.Control type="email" value={this.props.user.email} />
              )}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" onChange={(e)=> this.setState({SendMessageContent: e.target.value})} 
              value={this.state.SendMessageContent} />
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPicture">
              <Form.Label column sm={2}>Photo</Form.Label>
                <Col sm={10}>
                <input type="file"
                placeholder="upload an image"
                onChange={this.uploadMessageImage} 
                />
                  </Col>  
                {this.state.loading ? (
                  <h6> Chargement ...</h6>
                ) : (
                 <img src={this.state.SendMessagePhoto} alt="item chosen photo" style={{width:"10em", marginLeft:'8em'}} />
                )}
            </Form.Group>

          </Form>
            <Button style={{backgroundColor:"#1B263B", border:"none"}} variant="secondary" onClick={this.sendMessage}>
              Envoyer
            </Button>
          </Modal.Body>
         </div>
       </Modal>
       
        </div>
    )
  }
}


function mapStatetoProps(state){
  return  {user: state.user}
}

export default connect(
  mapStatetoProps,
  null
)(Service)