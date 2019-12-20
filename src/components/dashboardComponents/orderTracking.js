import React from 'react';
import {Card,   Col, Table} from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import DateFormat from '../function';
import {Modal, Form, Button, ListGroup, InputGroup, FormControl} from 'react-bootstrap'
import '../../App.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


let modalStyle={
  width:"50em",
  backgroundColor: "white",
  fontFamily: "Raleway"
}

const details={
  '&:hover':{
    textDecoration: "underline"
  }
}


class tracking extends React.Component{
  constructor(){
    super();
    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
    this.checkOrderSent = this.checkOrderSent.bind(this); 
    this.orderSent = this.orderSent.bind(this) 
    this.state={
      orders:[],
      show: false,
      items: [],
      order: [],
      user: [],
      sent: '',
    }
  }

  handleClose(){
  }

  handleShow(order){
    this.setState({show:true})
    let ctx = this;
    fetch(`http://localhost:3000/admins/order?id=${order._id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({items: data.items, order: data.thisOrder, user: data.thisUser})
     console.log("THE STATE ===========>", ctx.state.items)
    })
    .catch(function(error) {
      console.log('Request failed ->', error)
  });
  }

  checkOrderSent(){
    this.setState({sent: !this.state.sent})
  }

  orderSent(order){
    let ctx = this;
    this.setState({show: false})
    console.log(this.state.show)
    if (this.state.sent === true){
      fetch('http://localhost:3000/admins/update-order',{
        method: 'POST',
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        body: `order=${order}`
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        ctx.setState({orders: data.allOrders})
       console.log("THE STATE QUE JE CHERCHE ===========>", ctx.state.orders)
      })
      .catch(function(error) {
        console.log('Request failed ->', error)
    });
  
    }
  }

  componentDidMount(){
    let ctx = this;
    fetch('http://localhost:3000/admins/orders')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({orders: data.allOrders})
     console.log("THE STATE ===========>", ctx.state.orders)
    })
    .catch(function(error) {
      console.log('Request failed ->', error)
  });
  }

    render(){
      if (this.props.adminConnected == false || this.props.adminConnected == null){
        return <Redirect to="/loginadmin" />
     }

      return(
  <div style={{fontFamily:"Raleway"}}>
  <NavbarAdmin/>
    

      <div style={{ height:"100%", display:"flex", justifyContent:"center", paddingTop:"10%"}}>
        <Col lg={9}>
          <Card>
          <Card.Header style={{fontSize:'1.7em',  textAlign:'center'}}>Commandes et suivi</Card.Header>
            <Card.Body>

              <Table striped>
                <thead>
                  <tr>
                  <th>Date de la commande</th>
                  <th>Statut</th>
                  <th>Montant</th>
                  <th>Date d'envoi prévue</th>
                  <th></th>
                  <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orders.map((order,i) =>(               
                  <tr>                                  
                    <td>{DateFormat(order.date)}</td>
                    {order.sent == false ?(
                      <td> En préparation</td>
                    ):(
                    <td>Envoyée</td>
                    )}
                    <td>{order.total}€</td>
                    <td>{DateFormat(order.shipping_date)}</td>
                    {order.sent == true ?
                    (
                      <td><FontAwesomeIcon icon={faCheck} style={{color:"green"}} /> </td>
                      ):(
                        <td> <FontAwesomeIcon style={{color:"red"}} icon={faTimes} /> </td>
                    )}
                    <td onClick={() => this.handleShow(order)}> Détails</td>
                  </tr>
                  ))}
                </tbody>
              </Table>
                  <Modal show={this.state.show} onHide={this.handleClose} className="col-lg-8" >
                    <div style={modalStyle}>
                      <Modal.Header closeButton>
                        <Modal.Title>Détails de la commande :</Modal.Title>
                      </Modal.Header>
                        <Modal.Body>
                          <Card style={{ width: "90%", margin:"auto" }}>
                            <Card.Body>
                              <Card.Title> <strong>Produits: </strong></Card.Title>
                              <Card.Text>
                                {this.state.items.map((item, i) =>(
                                  <ListGroup.Item> - {item.name} ({item.price}€)</ListGroup.Item>
                                ))}
                              </Card.Text>
                              <Card.Title> <strong>Acheteur: </strong></Card.Title>
                              <Card.Text>
                                  <ListGroup.Item> {this.state.user.first_name} {this.state.user.last_name}: <br/>
                                              {this.state.user.email}
                                  </ListGroup.Item>
                              </Card.Text>
                                
                                <Card.Text>
                                  <ListGroup.Item style={{display:"flex"}}>
                                    {this.state.order.sent === false? (
                                      <Form.Check onClick={() => this.checkOrderSent(this.state.order)} type="checkbox"/>
                                    ): (
                                      <FontAwesomeIcon style={{marginRight:'1em'}} icon={faCheck} />
                                    )}
                                    Commande envoyée 
                                  </ListGroup.Item>
                                </Card.Text>
          
                            </Card.Body>
                          </Card>
                          <Button style={{backgroundColor:"#1B263B", border:"none", marginLeft:'47%', marginTop:'2em'}} variant="secondary" onClick={() => this.orderSent(this.state.order._id)}>
                          Enregistrer
                          </Button>
                        </Modal.Body>
                    </div>
                  </Modal>
            </Card.Body>
          </Card>
        </Col>
      </div>

    <div style={{height:"6em"}}></div>


   
  <Footer/>
  </div>
 )}
}


function mapStatetoProps(state){
  console.log("======>", state)
  return {adminConnected: state.admin.isAdminExist}
}


export default connect(
  mapStatetoProps,
  null
  )(tracking);