import React, { useState } from 'react';
import {Card, Button,   Col, Form, Row, Table} from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'


class stock extends React.Component{
    render(){
        return(

              <div style={{fontFamily:"Raleway"}}>
                <NavbarAdmin/>
                  <div style={{height:"75vh"}}>

                      <div style={{ height:"100%", display:"flex", justifyContent:"center", paddingTop:"10%"}}>
                        <Col lg="6">
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

                  <div style={{height:"6em"}}></div>
                  </div>
                <Footer/>
              </div>
                    
  )}
}


export default stock;




