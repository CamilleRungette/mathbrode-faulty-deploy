import React, {Component} from 'react';
import { Col, Button } from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrashAlt, faReply, faTimes } from '@fortawesome/free-solid-svg-icons'
import DateFormat from '../function'


const readMessage ={
  backgroundColor:"#ededed",
  fontSize: "0.8em"
}


class MessageItem extends Component{
  constructor(props){
    super(props);
    this.onReadClick = this.onReadClick.bind(this)
    this.deleteMessage = this.deleteMessage.bind(this)
    this.state={
      readFromDb: this.props.messageRead,
    }
  }

  onReadClick(data){
    let ctx = this;
  console.log("coucou")
    fetch('http://localhost:3000/admins/read-message',{
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `message_id=${data}&`
     })
     .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({readFromDb: data.newMessage.read})
     console.log("THE STATE ===========>", ctx.state.readFromDb)
    })
  }

  deleteMessage(data){
    console.log("coucou")
     fetch('http://localhost:3000/admins/delete-message',{
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `message_id=${data}`
     })
   }

  render(){
    var iconMessage = faCheck
    var marker = "Marquer comme lu"
    var styleMessage;
    console.log("ICICICI", this.state.readFromDb)
    if (this.state.readFromDb == true){
      styleMessage = readMessage
      iconMessage = faTimes
      marker = "Marquer comme non lu"
    } 

    

    return(
      <div style={{ display:"flex", justifyContent:"center", paddingTop:"4%"}}>
      <Col sm="9">  
        <div style={styleMessage} class="roww">
        <Col lg={11}>
        <div class="content">  
        <h4>Sujet : {this.props.messageObject}</h4>
        <p>De la part de:  {this.props.messageSender}</p>
          <p>{this.props.messageContent}  </p>
          <p>Envoyé le : {DateFormat(this.props.messageDate)} </p>
        </div>
        </Col>
        <Col lg={1}>
          <div>
            <FontAwesomeIcon icon={faReply} />
            <br></br>
            <br></br>
            <FontAwesomeIcon onClick={() => this.onReadClick(this.props.messageId)} title={marker} icon={iconMessage} />
            <br></br>
            <br></br>
            <FontAwesomeIcon onClick={() => this.deleteMessage(this.props.messageId)} icon={faTrashAlt} />
          </div>                    
          </Col>
          </div> 
        </Col>
    </div>

    )
  }
}

export default MessageItem;