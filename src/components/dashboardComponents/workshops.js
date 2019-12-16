import React, { useState } from 'react';
import {Card, Button, Col, Form, Row, Table,} from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'




class Workshops extends React.Component{
    render(){
        return(

<div>

  <NavbarAdmin></NavbarAdmin>
          {/* Create-item form */}
    <Col lg={{offset:3, span:6 }}>
        <Card>
          <Card.Header style={{fontSize:"1.3em"}}>Ajouter un atelier</Card.Header>
            <Card.Body>
                        
            <Form>

            <Form.Group as={Row} controlId="formHorizontalPicture">
              <Form.Label column sm={2}>Photo</Form.Label>
                <Col sm={10}>
                <input type="file"
                placeholder="upload an image"

                />
                  </Col>  
             {/*      {this.state.loading ? (
                  <h6> Chargement ...</h6>
                ) : (
                 <img  style={{width:"10em", marginLeft:'8em'}} />
                )}*/}
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalTitle">
              <Form.Label column sm={2}>Titre</Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>  
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalDesc">
              <Form.Label column sm={2}>Description</Form.Label>
                <Col sm={10}>
                  <Form.Control as="textarea"  />
                </Col>  
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>Prix</Form.Label>
                <Col sm={10}>
                  <Form.Control type="text"  />
                </Col>  
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalDuration">
              <Form.Label column sm={2}>Durée</Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" />
                </Col>  
            </Form.Group>

            <Form.Group style={{textAlign:"center"}} as={Row}>
                <Col sm={{ offset: 1 }}>
                  <Button type="submit"  style={{border:"none", backgroundColor:"#1B263B"}}>Valider</Button>
                </Col>
            </Form.Group>
          </Form>

          </Card.Body>
        </Card>
      </Col> 
 
 <br></br>
 <br></br>
 <br></br>

</div>

        )}
}


export default Workshops;