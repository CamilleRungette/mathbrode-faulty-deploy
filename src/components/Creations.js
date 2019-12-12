import React, { useState } from 'react';
import {
  Button,
} from 'reactstrap';
import '../App.css'
import ProduitMini from './cards/MiniItem'




class Creations extends React.Component {
  


  render() {

    var rows = [];
    for (var i=0; i<9; i++) {
        rows.push(<ProduitMini key={i} />);
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
              
              </div>

              <div style={{height:"5em"}}></div>


              <div className="row justify-content-center">
              <Button color="secondary" >en voir plus...</Button>
              </div>
        </div>
    </div>
    
    







  
 

  );

}

}


export default Creations;