import React from 'react';
import {
  Button,} from 'reactstrap';
import '../App.css'
import {Modal, Form} from 'react-bootstrap'

let modalStyle={
  width:"50em",
  backgroundColor: "white",
  fontFamily: "Raleway"
}


class Presentation extends React.Component {
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
            body: `object=contact_me&content=${this.state.SendMessageContent}&sender_email=${this.state.SendMessageEmail}`
          })
        }
      
        handleClose(){
          this.setState({show: false})
        }
      
        handleShow(){
          this.setState({show:true})
        }
        render() {

      
    return(

<div className="row justify-content-center " style={{fontFamily:"Raleway"}}>
  <div>
  <h1 style={{fontSize:"4em", textAlign:"center"}}> <em>Je me présente</em></h1>
  <div style={{height:"8em"}}></div>
      <div className="col-lg-9 mx-auto" style={{ display:"flex", alignItems:"center"}} >
      <img src="presentation.png" className=" col-lg-6" style={{marginRight:"4em"}} alt="Alt text" />
        <div>
        <p  style={{fontSize:"1em"}} className="col-lg-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
          <div className="offset-3">
          <Button onClick={this.handleShow} style={{backgroundColor: "#1B263B" , marginTop:"2em"}}>Me contacter</Button>
          </div>
        </div>
      </div>
  </div>

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




</div>

)}
}


export default Presentation;
