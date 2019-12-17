import React, { useState } from 'react';
import {Card, Button,   Col, Form, Row, Table} from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


function isEven(value) {
  if (value%2 == 0)
    return true;
  else
    return false;
}



class stock extends React.Component{
  constructor(){
    super();
    this.state={
      items: []
    }
  }
  componentDidMount(){
    let ctx = this;
    fetch('http://localhost:3000/admins/stock')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({items: data.allItems})
     console.log("THE STATE ===========>", ctx.state.items)
    })
    .catch(function(error) {
      console.log('Request failed ->', error)
  });
  }

    render(){
      console.log(this.state.items)
        return(

              <div style={{fontFamily:"Raleway"}}>
                <NavbarAdmin/>
                  <div >

                      <div style={{display:"flex", justifyContent:"center", paddingTop:"10%"}}>
                        <Col lg="8">
                          <Card>
                          <Card.Header style={{textAlign:"center", fontWeight:"bold"}}>Liste du stock</Card.Header>
                          <Card.Header>
                              <Row style={{fontWeight:"bold"}} >
                                    <Col lg={3}>Nom du produit</Col>
                                    <Col lg={1}>Prix</Col>
                                    <Col lg={2}>Frais de port</Col>
                                    <Col lg={3}>Description</Col>
                                    <Col lg={3}> <FontAwesomeIcon icon={faEdit} /> </Col>
                              </Row>
                              </Card.Header>
                                    {this.state.items.map((item, i) => 
                                    isEven(i) ? (
                                  <Row style={{margin:"auto", padding:'0.2em', height:"3.5em", width:"100%"}}>
                                    <Col lg={3}>{item.name}</Col>
                                    <Col lg={1}>{item.price}</Col>
                                    <Col lg={2} style={{textAlign:"center"}}>{item.shipping_fee}</Col>
                                    <Col lg={4} style={{ height:"2em", overflow:"auto"}}>{item.description}</Col>
                                    <Col lg={2} style={{textAlign:"center"}}><Button variant="info">Modifier</Button></Col>
                                  </Row>
                                  ):(
                                  <Row style={{margin:"auto", backgroundColor:"#dbdbdb", padding:'0.2em', height:"3.5em", width:"100%"}}>   
                                    <Col lg={3}>{item.name}</Col>
                                    <Col lg={1}>{item.price}</Col>
                                    <Col lg={2} style={{textAlign:"center"}}>{item.shipping_fee}</Col>
                                    <Col lg={4} style={{ height:"2em", overflow:"auto"}}>{item.description}</Col>
                                    <Col lg={2} style={{textAlign:"center"}}><Button variant="info">Modifier</Button></Col>
                                  </Row>
                                    )
                                  )}                               

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




