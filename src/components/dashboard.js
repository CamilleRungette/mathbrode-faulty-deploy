import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Col, Form, Row, Table,} from 'react-bootstrap';
import '../App.css';
import NavbarAdmin from './dashboardComponents/NavbarAdmin';
import Footer from './Footer'
import ImageUploader from 'react-images-upload';


export default class Dashboard extends Component {
  constructor(){
  super();
  this.ItemSubmit = this.ItemSubmit.bind(this);
  this.EventSubmit = this.EventSubmit.bind(this);
  this.state = {
          CreateItemName: '',
          CreateItemPrice: '',
          CreateItemSize: '',
          CreateItemDesc: '',
          CreateItemShipFee: '',
          CreateItemPhoto: '',
          CreateEventName: '',
          CreateEventAddress: '',
          CreateEventDate:'',
          CreateEventPhoto:'',
          CreateEventStart: '',
          CreateEventEnd: '',
        }
  }
  
  

  ItemSubmit(){
    console.log("click détécté")
    fetch('http://localhost:3000/admins/create-item', {
            method: 'POST',
            headers: {'Content-Type':'application/x-www-form-urlencoded'},
            body: `name=${this.state.CreateItemName}&price=${this.state.CreateItemPrice}&size=${this.state.CreateItemSize}&description=${this.state.CreateItemDesc}&shipping_fee=${this.state.CreateItemShipFee}&copy=1`
    })
   }

  EventSubmit(){
    console.log("click détécté")
    fetch('http://localhost:3000/admins/create-event', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `name=${this.state.CreateEventName}&address=${this.state.CreateEventAddress}&date=${this.state.CreateEventDate}&starting_time=${this.state.CreateEventStart}&ending_time=${this.state.CreateEventEnd}`
})

  }
  
    render(){

      var totalUsers = 120;
      var totalMoney = 840;
      var ordersCompleted = 18;
      var ordersPending = 4;


      return(
<div style={{fontFamily:"Raleway"}}>
       
  <NavbarAdmin/>

    <Table responsive>
<thead>
<tr>
<th> <img src="users.png" alt="icon" class="iconstat"/></th>
<th><img src="euro.png" class="iconstat" alt="icon"/></th>
<th><img src="vendu.png" class="iconstat" alt="icon"/></th>
<th><img src="prepa.png" class="iconstat"alt="icon"/></th>
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


  <div style={{display:"flex", flexDirection:"column" }}>
  <div style={{height:"4em"}}></div>

            {/* Create-item form */}
    <Col lg={{offset:3, span:6 }}>
        <Card>
          <Card.Header style={{fontSize:"1.3em"}}>Ajouter un produit</Card.Header>
            <Card.Body>
                        
            <Form>

            <Form.Group as={Row} controlId="formHorizontalPicture">
              <Form.Label column sm={2}>Photo</Form.Label>
                <Col sm={10}>
                  <Button style={{border:"none", backgroundColor:"#1B263B"}} > Rechercher </Button>
                </Col>  
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalName">
              <Form.Label column sm={2}>Nom</Form.Label>
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

            <Form.Group as={Row} controlId="formHorizontalFees">
              <Form.Label column sm={2}>Frais de port</Form.Label>
                <Col sm={10}>
                  <Form.Control type="textarea" onChange={(e)=> this.setState({CreateItemShipFee: e.target.value})}
                        value={this.state.CreateItemShipFee} />
                </Col>  
            </Form.Group>


            <Form.Group style={{textAlign:"center"}} as={Row}>
                <Col sm={{ offset: 1 }}>
                  <Button type="submit" onClick={this.ItemSubmit} style={{border:"none", backgroundColor:"#1B263B"}}>Valider</Button>
                </Col>
            </Form.Group>
          </Form>

          </Card.Body>
        </Card>
      </Col> 
 


<div style={{height:"12em"}}></div>


<Col lg={{offset:3, span:6 }}>
        <Card>
          <Card.Header style={{fontSize:"1.3em"}}>Ajouter un événement</Card.Header>
            <Card.Body>
                        
            <Form>

            <Form.Group as={Row} controlId="formHorizontalPicture">
              <Form.Label column sm={2}>Photo</Form.Label>
                <Col sm={10}>
                  <Button style={{border:"none", backgroundColor:"#1B263B"}} > Rechercher </Button>
                </Col>  
            </Form.Group>

              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Label column sm={2}>Nom</Form.Label>
                  <Col sm={10}>
                    <Form.Control type="name" onChange={(e)=> this.setState({CreateEventName: e.target.value})}
                          value={this.state.CreateEventName} />
                  </Col>  
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>Adresse</Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" onChange={(e)=> this.setState({CreateEventAddress: e.target.value})}
                        value={this.state.CreateEventAddress} />
                </Col>  
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalSize">
              <Form.Label column sm={2}>Date</Form.Label>
                <Col sm={10}>
                  <Form.Control type="date" onChange={(e)=> this.setState({CreateEventDate: e.target.value})}
                        value={this.state.CreateEventDate}/>
                </Col>  
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPrice">
              <Form.Label column sm={2}>Heure</Form.Label>
                <Col sm={5}>
                  <Form.Control placeholder="Début" type="text" onChange={(e)=> this.setState({CreateEventStart: e.target.value})}
                        value={this.state.CreateEventStart} />
                </Col> 
                <Col sm={5                }>
                  <Form.Control placeholder="Fin" type="text" onChange={(e)=> this.setState({CreateEventEnd: e.target.value})}
                        value={this.state.CreateEventEnd} />
                </Col>  
            </Form.Group>

            <Form.Group style={{textAlign:"center"}} as={Row}>
                <Col sm={{ offset: 1 }}>
                  <Button type="submit" onClick={this.EventSubmit} style={{border:"none", backgroundColor:"#1B263B"}}>Valider</Button>
                </Col>
            </Form.Group>
          </Form>

          </Card.Body>
        </Card>
      </Col> 

      </div>

<div style={{height:"8em"}}></div>


<Footer/>

</div>

  
  
      )
    }
  

}