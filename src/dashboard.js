import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Card,
    Button,
    Col,
    Form,
    Row,
    Table,
} from 'react-bootstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'react-bootstrap';
import './App.css';

export default class Dashboard extends Component {

  
    render(){
  
      
    
      return(

     <div>
         
         <div class="row justify-content-center">
                <Col sm="6">
                    <Card>
                            <Card.Header>Formulaire de création d'un produit</Card.Header>
                                <Card.Body>
                                    
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalName">
                                <Form.Label column sm={2}>Nom du produit</Form.Label>
                                        <Col sm={10}>
                                                <Form.Control type="text" required/>
                                        </Col>  
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPrice">
                                <Form.Label column sm={2}>Prix</Form.Label>
                                        <Col sm={10}>
                                                <Form.Control type="text" required/>
                                        </Col>  
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalSize">
                                <Form.Label column sm={2}>Taille</Form.Label>
                                        <Col sm={10}>
                                                <Form.Control type="text" required/>
                                        </Col>  
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalNumber">
                                <Form.Label column sm={2}>Nombre d'exemplaire</Form.Label>
                                        <Col sm={10}>
                                                <Form.Control type="number" min="1" required/>
                                        </Col>  
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalDesc">
                                <Form.Label column sm={2}>Description</Form.Label>
                                        <Col sm={10}>
                                                <Form.Control as="textarea" required/>
                                        </Col>  
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPicture">
                                <Form.Label column sm={2}>Photo</Form.Label>
                                        <Col sm={10}>
                                                {/*  <Form.Control type="email" required/>  */}
                                        </Col>  
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalFees">
                                <Form.Label column sm={2}>Frais de port</Form.Label>
                                        <Col sm={10}>
                                                <Form.Control type="number" required/>
                                        </Col>  
                        </Form.Group>


                                        <Form.Group as={Row}>
                                            <Col sm={{ span: 10, offset: 2 }}>
                                            <Button type="submit" variant="info">Valider</Button>
                                            </Col>
                                        </Form.Group>
                                        </Form>

                                </Card.Body>
                        </Card>
                  </Col>
                  </div>
             <br></br>
             <br></br>
             <br></br>
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
                      <div>
                            <img class="trash" src="reply.png"></img>
                            <br></br>
                            <br></br>
                            <img class="trash" src="trash.png"></img>
                           </div>                     
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
                      <div>
                            <img class="trash" src="reply.png"></img>
                            <br></br>
                            <br></br>
                            <img class="trash" src="trash.png"></img>
                           </div>                     
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
                      <div>
                            <img class="trash" src="reply.png"></img>
                            <br></br>
                            <br></br>
                            <img class="trash" src="trash.png"></img>
                           </div>                     
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
                      <div>
                            <img class="trash" src="reply.png"></img>
                            <br></br>
                            <br></br>
                            <img class="trash" src="trash.png"></img>
                           </div>                     
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