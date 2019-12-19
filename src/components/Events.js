import React, { Component } from 'react';
import Footer from './Footer'
import Navigbar from './Navbar'
import Event from './cards/Event-item'
import {Col} from 'reactstrap'

class Events extends Component{

  constructor(props){
    super(props)
    this.state= {
      events: [],
    }
  }

  componentDidMount(){
    let ctx = this
    fetch('http://localhost:3000/events')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({events: data.allEvents})
     console.log("THE STATE ===========>", ctx.state.events)
    })
    .catch(function(error) {
      console.log('Request failed ->', error)
  });
  }  


  render(){
    let eventList = this.state.events.map(function(event, i){
      return <Event key={i}
        eventName={event.name}
        eventAddress={event.address}
        eventDate={event.date}
        eventStart={event.starting_time}
        eventEnd={event.ending_time}
        eventPhoto={event.photo} 
      />
    }, this)
  
    return(


    <div  style={{fontFamily:"Raleway"}}>
      
      <Navigbar/>
      <Col lg={11} style={{margin:"auto"}}>
      <div style={{height:"10em"}}></div>
          <h1 style={{textAlign:"center", fontSize:"3.5em", marginTop:"0.5em"}}>Mes Événements</h1>
          <div style={{height:"6em"}}></div>
        <div  style={{ display:"flex", justifyContent:"space-around"}}>
         
          {eventList}
        </div>
      </Col>
      <div style={{height:"8em"}}></div>

      <Footer/>
    </div>
    )}
}

export default Events ;