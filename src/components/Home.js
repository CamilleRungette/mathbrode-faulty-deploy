import React, { useState } from 'react';
import '../App.css'
import Creations from './Creations'
import Navigbar from './Navbar'
import Service from './Service'
import 'bootstrap/dist/css/bootstrap.min.css';





class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {isOpen:false}
  }
 
  toggle(){
    this.setState(!this.state.isOpen);
  }

  render(){

    return (
      <div>
        <Navigbar/>
          <div className="row">
              <div className="col-lg-12">
            
            
                    <img src="background 1.png"></img>
      
                    <div className="text-block">
                    <p>Broderie <br/> Moderne</p>
                    </div>
      
      
              </div>
          </div>
      
      <Creations/>
      <div style={{marginBottom:"20em"}} ></div>
      <Service/>
      <div style={{marginBottom:"20em"}} ></div>
        </div>
      
      
      
      
        );


  }
  
}

export default Home;