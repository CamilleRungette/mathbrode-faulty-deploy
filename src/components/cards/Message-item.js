import React, {Component} from 'react';
import { Col } from 'react-bootstrap';

class MessageItem extends Component{
  render(){
    return(
      <div style={{ height:"100%", display:"flex", justifyContent:"center", paddingTop:"10%"}}>
      <Col sm="6">
      <div class="roww">
        <Col lg={11}>
        <div class="content">    
        <h4>Sujet : {this.props.messageObject}</h4>
        <p>De la part de:  {this.props.messageSender}</p>
          <p>{this.props.messageContent}  </p>
          <p>Envoyé le {this.props.messageDate} </p>
        </div>
        </Col>

      <Col lg={1}>
        <div>
        <img class="trash" alt="trash" src="reply.png"></img>
          <br></br>
          <br></br>
        <img class="trash" src="trash.png" alt="trash"></img>
        </div>                    
        </Col>
        </div> 
      </Col>
    </div>

    )
  }
}

export default MessageItem;