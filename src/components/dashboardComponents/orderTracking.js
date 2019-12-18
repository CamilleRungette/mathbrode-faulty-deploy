import React from 'react';
import {Card,   Col, Table} from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import DateFormat from '../function';
import {Modal, Form, Button, ListGroup} from 'react-bootstrap'
import '../../App.css'

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
    this.state={
      orders:[],
      show: false,
      items: []
    }
  }

  handleClose(){
    this.setState({show: false})
  }

  handleShow(order){
    this.setState({show:true})
    let ctx = this;
    fetch(`http://localhost:3000/admins/order?id=${order._id}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({items: data.items})
     console.log("THE STATE ===========>", ctx.state.items)
    })
    .catch(function(error) {
      console.log('Request failed ->', error)
  });

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
      let status = false
        return(
  <div style={{fontFamily:"Raleway"}}>
  <NavbarAdmin/>
    <div style={{height:"75vh"}}>

      <div style={{ height:"100%", display:"flex", justifyContent:"center", paddingTop:"10%"}}>
        <Col sm="11">
          <Card>
          <Card.Header>Commandes et suivi</Card.Header>
            <Card.Body>

              <Table striped>
                <thead>
                  <tr>
                  <th>Date de la commande</th>
                  <th>Statut</th>
                  <th>Montant</th>
                  <th>Date d'envoi</th>
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
                    <td><FontAwesomeIcon icon={faCircle} /> </td>
                    <td onClick={() => this.handleShow(order)}  > Détails</td>
                  </tr>
                  ))}
                </tbody>
              </Table>

        <Modal show={this.state.show} onHide={this.handleClose} className="col-lg-10" >
          <div style={modalStyle}>
            <Modal.Header closeButton>
              <Modal.Title>Détails de la commande :</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <Card style={{ width: "80%" }}>
                  <Card.Body>
                    <Card.Title>Produits:</Card.Title>
                    <Card.Text>
                      {this.state.items.map((item, i) =>(
                        <ListGroup.Item>{item.name}</ListGroup.Item>
                      ))}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
                <Button style={{backgroundColor:"#1B263B", border:"none"}} variant="secondary" onClick={this.sendMessage}>
                  Envoyer
                </Button>
              </Modal.Body>
          </div>
        </Modal>


            </Card.Body>
          </Card>
        </Col>
      </div>

    <div style={{height:"6em"}}></div>


    </div>
  <Footer/>
  </div>
 )}
}


export default tracking;