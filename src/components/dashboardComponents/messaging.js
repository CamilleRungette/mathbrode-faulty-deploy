import React, { useState } from 'react';
import {Card, Button,   Col, Form, Row, Table} from 'react-bootstrap';
import NavbarAdmin from './NavbarAdmin';
import Footer from '../Footer'


class messaging extends React.Component{
    render(){


        return(
          <div style={{fontFamily:"Raleway"}}>
          <NavbarAdmin/>
            <div style={{height:"75vh"}}>
        
              <div style={{ height:"100%", display:"flex", justifyContent:"center", paddingTop:"10%"}}>
                <Col sm="6">
                <div class="roww">
                  <div class="content">    
                  <h4>Sujet : Nom du produit</h4>
                    <p>bonjour je suis tres interessée par ce produit et j voudrais le onjour je suis tres interessée par ce produit et j voudrais le conjour je suis tres interessée par ce produit et j voudrais le c
                    onjour je suis tres interessée par ce produit et j voudrais le c
                    onjour je suis tres interessée par ce produit et j voudrais le c
                    onjour je suis tres interessée par ce produit et j voudrais le ccommander en bleu et noir  </p>
                  </div>

                  <div>
                  <img class="trash" src="reply.png"></img>
                    <br></br>
                    <br></br>
                  <img class="trash" src="trash.png"></img>
                  </div>                    
                  </div> 
                </Col>
              </div>
        
            <div style={{height:"6em"}}></div>
            </div>
          <Footer/>
          </div>
        


      
        )}
}


export default messaging;




