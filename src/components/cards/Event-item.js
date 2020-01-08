import React from 'react';
import { 
  Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem 
  } from 'reactstrap';
  import DateFormat from '../function'




class Event extends React.Component{
  render(){
    return(
      <div style={{fontFamily:"Raleway", marginBottom:"5em"}}>
       <Card style={{ width: '38rem', fontSize:"1.3em" }}>
        <CardImg variant="top" src={this.props.eventPhoto} />
        <CardBody>
          <CardTitle> <strong> {this.props.eventName} </strong></CardTitle>
          <CardText>
            {this.props.eventAddress}
          </CardText>
        </CardBody>
        <CardBody className="list-group-flush">
          <CardText >Le {DateFormat(this.props.eventDate)}  <br/>
        De {this.props.eventStart}h à {this.props.eventEnd}h </CardText>
        </CardBody>
        <ListGroup>
          <ListGroupItem> <a href={this.props.eventLink}>Voir l'évènement sur Facebook</a> </ListGroupItem>
        </ListGroup>
      </Card>
      </div>  
    )}
  }


export default Event;