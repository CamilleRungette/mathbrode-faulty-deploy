import React, { useState } from 'react';
import {
  Button,
} from 'reactstrap';
import '../App.css'
import MiniItem from './cards/MiniItem'
import {Link} from 'react-router-dom';




class MaxCreations extends React.Component {
  


  render() {

    var rows = [];
    for (var i=0; i<90; i++) {
        rows.push(<MiniItem key={i} />);
    }
    

  

  return (
  



    <div className="row justify-content-center">
        <div className="col-lg-8">
      
        <div style={{height:"5em"}}></div>
              <div style={{fontFamily:"Raleway"}}>
                <h1 style={{fontSize:"4em", textAlign:"center"}}> <em>Mes Créations</em></h1>
                <div style={{height:"10em"}}></div>
              <div className="row" style={{display:"flex", justifyContent: "space-around"}}>
                {rows}
              </div>
              
              </div>

              <div style={{height:"5em"}}></div>


              <div className="row justify-content-center">
              <Link to="/" ><Button color="secondary" >Home</Button></Link>
              </div>

              <div style={{height:"5em"}}></div>
        </div>
    </div>
    
    







  
 

  );

}

}


export default MaxCreations;