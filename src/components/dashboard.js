import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button,   Col, Form, Row, Table} from 'react-bootstrap';
import '../App.css';

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
      return(

     <div>

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




<Col sm="6">
    <Card>
            <Card.Header>Commandes et suivi</Card.Header>
                <Card.Body>
                    
                <Table striped>
                <thead>
                    <tr>
                    <th>Date de la commande</th>
                    <th>Status</th>
                    <th>Montant</th>
                    <th>Produit</th>
                    </tr>
                </thead>
                        <tbody>
                            <tr>                                  
                            <td>12/06/2019</td>
                            <td>Envoyé</td>
                            <td>34,99€</td>
                            <td>#12992</td>
                            </tr>

                            <tr>                            
                            <td>22/07/2019</td>
                            <td>En cours de préparation</td>
                            <td>59,95€</td>
                            <td>#12991</td>
                            </tr>

                            <tr>
                            <td>25/07/2019</td>
                            <td>En cours de préparation</td>
                            <td>99,99€</td>
                            <td>#12990</td>
                            </tr>

                        </tbody>
              </Table>
        
                </Card.Body>
        </Card>
  </Col>
<br></br>
<br></br>
<br></br>
  
<Col sm="6">
  
  <div class="roww">

            <div class="content">    
            <h4>Sujet : Nom du produit</h4>
            <p>bonjour je suis tres interessée par ce produit et j voudrais le onjour je suis tres interessée par ce produit et j voudrais le conjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le ccommander en bleu et noir  </p>
            </div>

            <img class="trash" src="reply.png"></img>
            <img class="trash" src="trash.png"></img>
                                
    </div> 
    
  </Col>
  <Col sm="6">
  
  <div class="roww">

            <div class="content">    
            <h4>Sujet : Nom du produit</h4>
            <p>bonjour je suis tres interessée par ce produit et j voudrais le onjour je suis tres interessée par ce produit et j voudrais le conjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le ccommander en bleu et noir  </p>
            </div>

              <img class="trash" src="reply.png"></img>
              <img class="trash" src="trash.png"></img>
                                  
      </div> 
    
  </Col>
  <Col sm="6">
  
  <div class="roww">

            <div class="content">    
            <h4>Sujet : Nom du produit</h4>
            <p>bonjour je suis tres interessée par ce produit et j voudrais le onjour je suis tres interessée par ce produit et j voudrais le conjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le c
            onjour je suis tres interessée par ce produit et j voudrais le ccommander en bleu et noir  </p>
            </div>

              <img class="trash" src="reply.png"></img>
              <img class="trash" src="trash.png"></img>
                                  
      </div> 
    
  </Col>
  <br></br>
  <br></br>
  <br></br>
  <Col sm="6">
    <Card>
            <Card.Header>Liste du stock</Card.Header>
                <Card.Body>
                    
                <Table striped>
                <thead>
                    <tr>
                    <th>Nom du produit</th>
                    <th>Nbre restant</th>
                    <th>Nbre vendu</th>
                    <th></th>
                    </tr>
                </thead>
                        <tbody>
                            <tr>                                  
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td><Button variant="info">Modifier</Button></td>
                            </tr>

                            <tr>                                  
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td><Button variant="info">Modifier</Button></td>
                            </tr>

                            <tr>                                  
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td><Button variant="info">Modifier</Button></td>
                            </tr>

                            <tr>                                  
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td><Button variant="info">Modifier</Button></td>
                            </tr>

                            <tr>                                  
                            <td>X</td>
                            <td>X</td>
                            <td>X</td>
                            <td><Button variant="info">Modifier</Button></td>
                            </tr>

                            

                        </tbody>
              </Table>
        
                </Card.Body>
        </Card>
  </Col>



     </div>
  
  
      )
    }
  

}