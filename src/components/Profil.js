import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import {Card, Form, Row, Col, Button} from 'react-bootstrap'


class Profil extends Component{
  constructor(){
    super();
    this.state={
      first_name:'',
      last_name:'',
      email: '',
      address: '',
      zipcode: '',
      city: '',
    }
  }

  render(){
    console.log(this.props.user)
    if (this.props.connected == false || this.props.connected == null){
      return <Redirect to="/" />
    }

    return(
      <div>
        <div style={{fontFamily:"Raleway"}}>
          <Navbar/>
          <div >
          <div style={{height:"6em"}}></div>
          <Card className="col-8 mx-auto" >
          <h2 style={{textAlign:"center", fontSize:"3em", marginTop:'1em'}}>Ton Profil</h2>
          <div style={{height:"1em"}}></div>
            <div>
              <div style={{fontSize:'1.3em', textAlign:'center', marginTop:"2em"}} >Pas de messages</div>
              
                <Form>
                  <Form.Group >
                    <Row>
                      <Col>
                    <Form.Label>Prénom </Form.Label>
                    <Form.Control type="text" onChange={(e)=> this.setState({newUserFirstName: e.target.value})}
                    value={this.state.newUserFirstName} />
                    </Col>
                    <Col>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" onChange={(e)=> this.setState({ newUserLastName: e.target.value})}
                    value={this.state.newUserLastName} />
                    </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={(e)=> this.setState({newUserEmail: e.target.value})}
                    value={this.state.newUserEmail} />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" onChange={(e)=> this.setState({newUserPassword: e.target.value})} 
                    value={this.state.newUserPassword} />
                  </Form.Group>
                </Form>
                  <Button style={{backgroundColor:"#1B263B", border:"none"}} variant="secondary" onClick={this.handleSubmitSignUp}>
                    S'inscrire
                </Button>
  
            </div>
            <div style={{height:"6em"}}></div>
            </Card>
            </div>
            <div style={{height:"6em"}}></div>
          <Footer/>
        </div>     
      </div>
    )
  }
}

function mapStatetoProps(state){
  return  {connected: state.user.isUserExist,
          user: state.user.userSigned,
          item: state.item}
}

export default connect(
  mapStatetoProps,
  null
  )(Profil);

