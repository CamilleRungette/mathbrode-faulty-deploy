import React, { useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'
import MessageItem from '../cards/Message-item';


class Messages extends React.Component{

  constructor(props){
    super(props)
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
        />
      }, this)

      console.log("MESSAGE LISTE", messageList.length)

        return(
          <div style={{fontFamily:"Raleway"}}>
          <NavbarAdmin/>
            <div style={{height:"75vh"}}>
              {messageList}
            </div>
            <div style={{height:"6em"}}></div>
          <Footer/>
          </div>
        


      
        )}
}


export default Messages;




