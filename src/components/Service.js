import React, {Component} from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut, faCalendarAlt, faHandshake } from '@fortawesome/free-solid-svg-icons'


class Service extends Component{
  render(){
    return(
      <Col xs="10" style={{margin:"auto"}}>
        <Row style={{fontFamily:"Raleway", display:"flex", justifyContent:"space-around"}}>

          <Col xs="3">
            <Card style={{backgroundColor:"#EDF3F7", width:"20em", height:"14em", padding:"1em", border:"none"}}>
              <CardBody >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <CardTitle style={{ fontSize:"1.2em"}} ><strong>Atelier d'initiation</strong> </CardTitle>
                <FontAwesomeIcon icon={faCalendarAlt} className={"fa-2x"}/>
                </div>
                  <CardText>Je vous propose de vous initier aux bases de la broderie pendant un cours de 2h. Réservez-votre créneau</CardText>
                </CardBody>
            </Card>
          </Col>

          <Col xs="3">
            <Card style={{backgroundColor:"#EDF3F7", width:"20em", height:"14em", padding:"1em", border:"none"}}>
              <CardBody >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <CardTitle style={{ fontSize:"1.2em"}} ><strong>Projets personnalisés</strong> </CardTitle>
                <FontAwesomeIcon icon={faCut} className={"fa-2x"}/>
                </div>
                  <CardText>Une idée de modèle ? Vous pouvez me contacter pour des projets personnels. Dessins, prénom, couronnes .. Demandez-moi</CardText>
                </CardBody>
            </Card>
          </Col>

          <Col xs="3">
            <Card style={{backgroundColor:"#EDF3F7", width:"20em", height:"14em", padding:"1em", border:"none"}}>
              <CardBody >
                <div style={{display:"flex", justifyContent:"space-between", marginBottom:"0.6em"}} >
                <CardTitle style={{ fontSize:"1.2em"}} ><strong>Rencontrez-moi</strong> </CardTitle>
                <FontAwesomeIcon icon={faHandshake} className={"fa-2x"}/>
                </div>
                  <CardText>Venez me rencontrer directement sur les marchés auxquels je participe régulièrement.</CardText>
                </CardBody>
            </Card>
          </Col>

        </Row>
      </Col>
    )
  }
}

export default Service;