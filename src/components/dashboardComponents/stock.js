import React, { useState } from 'react';
import {Card, Button,   Col, Form, Row, Table} from 'react-bootstrap';
import NavbarAdmin from '../NavbarAdmin';


class stock extends React.Component{
    render(){
        return(
            <div>
                 <NavbarAdmin></NavbarAdmin>

            <div class="row justify-content-center">
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

</div>

        )}
}


export default stock;




