import React, { Component } from 'react';
import Footer from './Footer'
import Navbar from './Navbar'
import {Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Col, Row } from 'reactstrap';


class Classes extends Component{
  constructor(){
    super();
    this.state = {
      workshops:[]
    }
  }

  componentDidMount(){
    let ctx = this
    fetch('http://localhost:3000/workshops')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({workshops: data.allWorkshops})
      console.log("THE STATE", ctx.state.workshops)
    })
    .catch(function(error){
      console.log("FAILED")
    });

  }

  render(){
    return(
    <div style={{fontFamily:"Raleway"}}>
      <Navbar/>
      <div style={{height:"8em"}}></div>
      <Col sm={11} style={{margin:"auto"}}>
      <h1 style={{textAlign:"center", fontSize:"3.5em", marginTop:"0.5em"}}>Les Ateliers</h1>
      <div style={{height:"8em"}}></div>
      <div style={{margin:"auto", display:"flex", justifyContent:"space-around"}}>
      {this.state.workshops.map((workshop, i) =>(
        <div>
          <Card style={{ width: '38rem'}}>
          <CardImg variant="top" src={workshop.photo}/>
          <CardBody>
            <CardTitle style={{fontSize:"1.3em", textAlign:"center"}}> <strong> {workshop.title} </strong></CardTitle>
            <br/>
            <CardText style={{fontSize:"1.1em", width:'95%', margin:"auto", textAlign:'justify'}}>
              {workshop.desc}
            </CardText>
          </CardBody>
          <CardBody style={{display:"flex", justifyContent:"space-around", fontSize:'1.2em'}}>
              <CardText > <strong>Prix : </strong> {workshop.price} €</CardText>
              <CardText > <strong>Durée: </strong> {workshop.duration}</CardText>
          </CardBody>
          <ListGroup>
            <ListGroupItem style={{textAlign:"center", fontSize:'1.2em'}}> Réserver un créneau </ListGroupItem>
          </ListGroup>
        </Card>
      </div>
       ))} 
       </div>
       </Col>
       <div style={{height:"8em"}}></div>

      <Footer />
      
    </div>
    )}
}

export default Classes ;