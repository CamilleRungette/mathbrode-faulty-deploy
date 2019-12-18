import React, { Component } from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DateFormat from '../components/function'
import {Card, Button} from 'react-bootstrap'
 
class MyOrders extends Component{
  constructor(){
    super();
    this.state={
      myOrders: [],
    }
  }
  componentDidMount(){
    let ctx = this;
    fetch('http://localhost:3000/users/myorders')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      console.log("DATA", data)
      ctx.setState({myOrders: data.myOrders, myItems: data.myItems})
    })
    .catch(function(error) {
      console.log('Request failed ->', error)
  });
  }


  render(){
    return(
      <div style={{fontFamily:"Raleway"}}>
        <Navbar/>
        <div style={{height:'5em'}}></div>
        {this.state.myOrders.map((order, i)=>(
        <Card className="col-8 mx-auto" style={{margin:"5em"}} >
          <Card.Body  >
            <Card.Title><h1>Commande du {DateFormat(order.date)} </h1></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"># {order._id} </Card.Subtitle>
            <Card.Text>
              <h4>Détails de la commande: </h4>
              {order.items.map((item,i)=>(
              <div>
                <Card style={{ width:'100%' }}>
                  <div style={{display:"flex"}}>
                  <Card.Img variant="top" style={{width:'12em'}} src={item.photo} />
                  <Card.Body style={{display:"flex", flexDirection:"column", justifyContent:"center", marginLeft:"2em"}}>
                    <Card.Title style={{fontSize:'1.5em', textDecoration:"underline"}}>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description} <br/>
                      {item.price} €
                    </Card.Text>
                  </Card.Body>
                  </div>
                </Card>              
                </div>
              ))}
              <br/>
              <h4 style={{textAlign:"center"}}>Total: {order.total} €</h4>
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
        <div style={{height:'5em'}}></div>
        <Footer />
      </div>
    )
  }
}

export default MyOrders;