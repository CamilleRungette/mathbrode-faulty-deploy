import React, { useState } from 'react';
import {Card, Button,   Col, Form, Row, Table} from 'react-bootstrap';
import NavbarAdmin from '../NavbarAdmin';


class tracking extends React.Component{
    render(){
        return(
<div>
                 <NavbarAdmin></NavbarAdmin>

<div class="row justify-content-center">
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
</div>

</div>
        )}
}


export default tracking;