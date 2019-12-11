import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Col, Form, Row, Table,} from 'react-bootstrap';
import '../App.css';
import NavbarAdmin from './NavbarAdmin';


export default class Dashboard extends Component {
  constructor(){
  super();
  this.ItemSubmit = this.ItemSubmit.bind(this);
  this.state = {
          CreateItemName: '',
          CreateItemPrice: '',
          CreateItemSize: '',
          CreateItemDesc: '',
          CreateItemShipFee: '',
          CreateItemPhoto: '',
        }
  }
  
  

  ItemSubmit(){
    console.log("click détécté")
    console.log(this.state.CreateItemName)
    fetch('http://localhost:3000/admins/create-item', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `name=${this.state.CreateItemName}&price=${this.state.CreateItemPrice}&size=${this.state.CreateItemSize}&description=${this.state.CreateItemDesc}&shipping_fee=${this.state.CreateItemShipFee}&copy=1`
    })
   }
  
    render(){

      var totalUsers = 120;
      var totalMoney = 840;
      var ordersCompleted = 18;
      var ordersPending = 4;


      return(

       
       

     <div>
       
        <NavbarAdmin></NavbarAdmin>

        <br></br>
        <br></br>
    


    <Table responsive>
  <thead>
    <tr>
      <th> <img src="users.png" class="iconstat"></img></th>
      <th><img src="euro.png" class="iconstat"></img></th>
      <th><img src="vendu.png" class="iconstat"></img></th>
      <th><img src="prepa.png" class="iconstat"></img></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><h3 class="textstat">{totalUsers} clients inscrits</h3></td>
      <td><h3 class="textstat">{totalMoney} € de revenu</h3></td>
      <td><h3 class="textstat">{ordersCompleted} commandes terminées</h3></td>
      <td><h3 class="textstat">{ordersPending} commandes en attente</h3></td>
    </tr>
    </tbody>
  </Table>
 <br></br>
<br></br>
<br></br>

<div class="row justify-content-center">
            {/* Create-item form */}
            <Col sm="6">
                <Card>
                  <Card.Header>Formulaire de création d'un produit</Card.Header>
                    <Card.Body>
                                
                    <Form>
                      <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>Nom du produit</Form.Label>
                          <Col sm={10}>
                            <Form.Control type="name" onChange={(e)=> this.setState({CreateItemName: e.target.value})}
                                  value={this.state.CreateItemName} />
                          </Col>  
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPrice">
                      <Form.Label column sm={2}>Prix</Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text" onChange={(e)=> this.setState({CreateItemPrice: e.target.value})}
                                value={this.state.CreateItemPrice} />
                        </Col>  
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalSize">
                      <Form.Label column sm={2}>Taille</Form.Label>
                        <Col sm={10}>
                          <Form.Control type="text" onChange={(e)=> this.setState({CreateItemSize: e.target.value})}
                                value={this.state.CreateItemSize}/>
                        </Col>  
                    </Form.Group>


                    <Form.Group as={Row} controlId="formHorizontalDesc">
                      <Form.Label column sm={2}>Description</Form.Label>
                        <Col sm={10}>
                          <Form.Control as="textarea" onChange={(e)=> this.setState({CreateItemDesc: e.target.value})}
                                value={this.state.CreateItemDesc} />
                        </Col>  
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalPicture">
                      <Form.Label column sm={2}>Photo</Form.Label>
                        <Col sm={10}>
                          <Button> Rechercher </Button>
                        </Col>  
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalFees">
                      <Form.Label column sm={2}>Frais de port</Form.Label>
                        <Col sm={10}>
                          <Form.Control type="textarea" onChange={(e)=> this.setState({CreateItemShipFee: e.target.value})}
                                value={this.state.CreateItemShipFee} />
                        </Col>  
                    </Form.Group>


                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" onClick={this.ItemSubmit}>Valider</Button>
                        </Col>
                    </Form.Group>
                  </Form>

                  </Card.Body>
                </Card>
              </Col> 
</div>



     </div>
    
  
  
      )
    }
  

}