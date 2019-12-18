import React from 'react';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'
import MessageItem from '../cards/Message-item';
import {Card} from 'react-bootstrap'

const givenSize ={
  height: '70vh',
  marginBottom:"3em"
}

const noGivenSize={
  marginBottom:"3em"
}

class Messages extends React.Component{

  constructor(){
    super()
    this.state= {
      messages: [],
    }
  }

  componentDidMount(){
    let ctx = this;
    fetch('http://localhost:3000/admins/messages')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({messages: data.allMessages})
     console.log("THE STATE ===========>", ctx.state.messages)
    })
    .catch(function(error) {
      console.log('Request failed ->', error)
  });
  }

    render(){

      let messageList = this.state.messages.map(function(message, i){
        return <MessageItem key={i}
        messageObject={message.object}
        messageContent={message.content}
        messageSender={message.sender_email}
        messageDate={message.date}
        messageId = {message._id}
        />
      }, this)

      console.log("MESSAGE LISTE", messageList.length)
      let size;
      if (messageList.length <= 1) {
        size = givenSize
      } else{
        size= noGivenSize
      }
        return(
          <div style={{fontFamily:"Raleway"}}>
          <NavbarAdmin/>
          <div style={size}>
          <div style={{height:"6em"}}></div>
          <Card className="col-8 mx-auto" >
          <h2 style={{textAlign:"center", fontSize:"3em", marginTop:'1em'}}>Messagerie</h2>
          <div style={{height:"1em"}}></div>

              {messageList}

            <div style={{height:"6em"}}></div>
            </Card>
            </div>
          <Footer/>
          </div>
        


      
        )}
}


export default Messages;




