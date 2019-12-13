import React from 'react';
import { 
  Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem 
  } from 'reactstrap';



class Event extends React.Component{
  render(){
    return(
      <div style={{fontFamily:"Raleway"}}>
       <Card style={{ width: '38rem', fontSize:"1.3em" }}>
        <CardImg variant="top" src={this.props.eventPhoto} />
        <CardBody>
          <CardTitle> <strong> {this.props.eventName} </strong></CardTitle>
          <CardText>
            {this.props.eventAddress}
          </CardText>
        </CardBody>
        <CardBody className="list-group-flush">
          <CardText >Le {this.props.eventDate}  <br/>
        De {this.props.eventStart} à {this.props.eventEnd} </CardText>
        </CardBody>
        <ListGroup>
          <ListGroupItem> <a href="#">Évent F </a> </ListGroupItem>
        </ListGroup>
      </Card>
      </div>  
    )}
  }


export default Event;