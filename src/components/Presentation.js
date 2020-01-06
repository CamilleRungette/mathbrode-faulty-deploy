import React from 'react';
import { Button, Row, Col, Input} from 'reactstrap';
import '../App.css'
import {Modal, Form} from 'react-bootstrap'
import {connect} from 'react-redux'


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
          SendMessageName: '',
        }
      }
      
        sendMessage(){
          this.setState({show:false});
          fetch('http://localhost:3000/users/create-message', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `object=Contactez_moi&content=${this.state.SendMessageContent}&sender_email=${this.state.SendMessageEmail}&sender_name=${this.state.SendMessageName}`
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

<div className="row justify-content-center col-10 mx-auto" style={{fontFamily:"Raleway"}}>
  <div>
    <h1 style={{fontSize:"4em", textAlign:"center"}}> Je me présente</h1>
      <div style={{height:"8em"}}></div>

      <div className="row">

        <div className="row" style={{ display:"flex", justifyContent:"center", alignItems:"center"}} >

          <div className="col-lg-4">
          <img src="presentation.png" style={{width:"100%"}} alt="Alt text" />
          </div>

          <div className="offset-1 col-lg-4">
            <p  style={{fontSize:"1.23em", textAlign:"center"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Button onClick={this.handleShow} style={{backgroundColor: "#1B263B" , marginTop:"1.3em", fontSize:"1.2em"}}>Me contacter</Button>
            </div>
          </div>

        <div>

          
    </div>

            
              
            
          </div>
        </div>
      </div>

      <Modal show={this.state.show} onHide={this.handleClose} className="col-lg-10" >
         <div style={modalStyle}>
          <Modal.Header closeButton>
            <Modal.Title>Me contacter</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Row>
            <Col>
              <Form.Group>
                {this.props.user == null?(
                  <Form.Control type="text" placeholder="Nom" onChange={(e)=> this.setState({SendMessageName: e.target.value})}
                  value={this.state.SendMessageName} />
                ):(
                  <Input type="text" placeholder="Nom" value={this.props.user.first_name}/>
                  )}
              </Form.Group>
            </Col>

            <Col>
            <Form.Group>
              {this.props.user == null ? (
                <Form.Control type="email" placeholder="Email" onChange={(e)=> this.setState({SendMessageEmail: e.target.value})}
                value={this.state.SendMessageEmail} />
              ):(
                <Input type="Email"  placeholder="Email" value={this.props.user.email} />

              )}
            </Form.Group>
            </Col>
            </Row>

            <Form.Group controlId="formBasicPassword">
              <Form.Control as="textarea" placeholder="Message" onChange={(e)=> this.setState({SendMessageContent: e.target.value})} 
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


function mapStatetoProps(state){
  console.log(state)
  return  {user: state.user.userSigned}
}

export default connect(
  mapStatetoProps,
  null
)(Presentation);
