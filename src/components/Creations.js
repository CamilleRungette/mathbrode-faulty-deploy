import React, { useState } from 'react';
import {
  Button,
} from 'reactstrap';
import '../App.css'
import MiniItem from './cards/MiniItem'
import {Link} from 'react-router-dom'

class Creations extends React.Component {

  render() {

    var rows = [];
    for (var i=0; i<9; i++) {
        rows.push(<MiniItem key={i} />);
    }
  return (
  



    <div className="row justify-content-center">
        <div className="col-lg-8">
      

              <div style={{fontFamily:"Raleway"}}>
                <h1 style={{fontSize:"4em", textAlign:"center"}}> <em>Mes Créations</em></h1>
                <div style={{height:"10em"}}></div>
              <div className="row" style={{display:"flex", justifyContent: "space-around"}}>
                {rows}
              </div>
              <Link to="/items"> <Button> En voir plus...</Button> </Link>
              </div>


        </div>
    </div>
    
    







  
 

  );

}

}


export default Creations;