import React, { useState } from 'react';
import {Card, Button,   Col, Form, Row, Table, Modal } from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


let displayMessage ={
  display:"block",
  width: "100%",
}

let unDisplayMessage={
  display:"none",
  width: "100%"
}


class stock extends React.Component{
  constructor(){
    super();
    this.onShowClick = this.onShowClick.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.state={
      items: [],
      show: false,
      id: '',
      name: '',
      desc: '',
      price: '',
      size: '',
      copy: '',
      shipping_fee: '',
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

  onShowClick(item){
    console.log(item)
    this.setState({
      show: !this.state.show,
      id: item._id,
      name: item.name,
      desc: item.description,
      price: item.price,
      size: item.size,
      copy: item.copy,
      shipping_fee: item.shipping_fee,
    })
  }

  
  onDeleteClick(item){
    let ctx = this
    console.log("coucou", item)
    fetch('http://localhost:3000/admins/delete-item',{
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `id=${item._id}`
    })
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    ctx.setState({items: data.allItems})
    console.log("THE STATE ===========>", data)
  })

  }

  updateItem(){
    let ctx = this
    fetch('http://localhost:3000/admins/update-item', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `id=${this.state.id}&name=${this.state.name}&desc=${this.state.desc}&price=${this.state.price}&size=${this.state.size}&copy=${this.state.copy}&shipping_fee=${this.state.shipping_fee}`
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data){
    ctx.setState({items: data.allItems, show: !ctx.state.show,
    })
    console.log("THE STATE ===========>", data)
  })

}

    render(){
      console.log(this.state.show)
      if (this.props.adminConnected == false || this.props.adminConnected == null){
        return <Redirect to="/loginadmin" />
     }
     console.log("--------------->", this.props.adminConnected)
      var show = unDisplayMessage
      if (this.state.show === true){
        show = displayMessage
      }

        return(
    <div style={{fontFamily:"Raleway"}}>
      <NavbarAdmin/>
        <div >

            <div style={{display:"flex", justifyContent:"center", paddingTop:"10%"}}>
              <Col lg="8">
                <Card>
                <Card.Header style={{textAlign:"center", fontSize:'1.7em'}}>Liste du stock</Card.Header>
                <Card.Header>
                    <Row style={{fontWeight:"bold"}} >
                          <Col lg={3}>Nom du produit</Col>
                          <Col lg={1}>Prix</Col>
                          <Col lg={2}>Frais de port</Col>
                          <Col lg={5} sm={4}>Description</Col>
                          <Col lg={1} sm={2}> <FontAwesomeIcon icon={faEdit} /> </Col>
                    </Row>
                    </Card.Header>
                      {this.state.items.map((item, i) =>(
                        <div>
                        <Row style={{margin:"auto", padding:'0.2em', width:"100%"}}>
                          <Col lg={3}>{item.name}</Col>
                          <Col lg={1}>{item.price}</Col>
                          <Col lg={2} style={{textAlign:"center"}}>{item.shipping_fee}</Col>
                          <Col lg={4} sm={3} style={{ height:"3.5em", overflow:"auto"}}>{item.description}</Col>
                          <Col lg={2} sm={3} style={{textAlign:"center"}}><Button variant="info" onClick={() => this.onShowClick(item)}>Modifier</Button> <Button variant="danger" onClick={() => this.onDeleteClick(item)} ><FontAwesomeIcon icon={faTrashAlt} /> </Button> </Col>
                        </Row>
                      </div>
                          )
                          )} 
                    <div style={{marginTop:'3em'}}></div>
                    <Form style={show}>
                    <h4 style={{textAlign: "center", marginBottom:'2em'}}>Modifier un article</h4>
                      <div style={{display:"flex"}}>
                        <Col lg={4}>
                        <Form.Label style={{fontWeight:"bold"}}>Nom</Form.Label>
                          <Form.Control type="text" onChange={(e)=> this.setState({name: e.target.value})}
                            value={this.state.name} />
                        </Col>
                        <Col lg={4}>
                        <Form.Label style={{fontWeight:"bold"}} >Description</Form.Label>
                          <Form.Control as="textarea"  onChange={(e)=> this.setState({desc: e.target.value})}
                            value={this.state.desc} />
                        </Col>
                        <Col lg={4}>
                        <Form.Label style={{fontWeight:"bold"}} >Prix</Form.Label>
                          <Form.Control as="textarea"  onChange={(e)=> this.setState({price: e.target.value})}
                            value={this.state.price}  />
                        </Col>
                      </div>
                      <div style={{display:"flex"}}>
                        <Col lg={4}>
                        <Form.Label style={{fontWeight:"bold"}}>Taille</Form.Label>
                          <Form.Control as="textarea"   onChange={(e)=> this.setState({size: e.target.value})}
                            value={this.state.size}/>
                        </Col>
                        <Col lg={4}>
                        <Form.Label style={{fontWeight:"bold"}}>Frais de port</Form.Label>
                          <Form.Control as="textarea"  onChange={(e)=> this.setState({shipping_fee: e.target.value})}
                            value={this.state.shipping_fee} />
                        </Col>
                        <Col lg={4}>
                        <Form.Label style={{fontWeight:"bold"}}>Exemplaire</Form.Label>
                          <Form.Control as="textarea"  onChange={(e)=> this.setState({copy: e.target.value})}
                            value={this.state.copy} />
                        </Col>
                      </div>
                      <br/>
                      <Button style={{backgroundColor:"#1B263B", border:"none", marginLeft:"47%"}} variant="secondary" onClick={this.updateItem}>
                        Enregistrer
                      </Button>
                      <div style={{height:'1em'}}></div>
                    </Form>
              
                </Card>
              </Col>
            </div>
        <div style={{height:"6em"}}></div>
        </div>
      <Footer/>
    </div>
                    
  )}
}


function mapStatetoProps(state){
  console.log("======>", state)
  return {adminConnected: state.admin.isAdminExist}
}


export default connect(
  mapStatetoProps,
  null
  )(stock);




