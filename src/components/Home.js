import React from 'react';
import '../App.css'
import Creations from './Creations'
import Navigbar from './Navbar'
import Presentation from './Presentation'
import Service from './Service'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

class Home extends React.Component {

  render(){

    return (
      <div className="col-12 col-lg-12"  style={{paddingLeft:0,paddingRight:0}}>
        <Navigbar/>
          <div className="row" style={{margin:"auto"}}>
              <div className="col-lg-12" style={{paddingLeft:0,paddingRight:0}}>
            
            
                    <img src="background 1.png" alt="background"></img>
      
                    <div className="text-block">
                    <p>Broderie <br/> Moderne</p>
                    </div>
      
      
              </div>
          </div>
          <div style={{marginBottom:"10em"}} ></div>

      
      <Creations/>
      <div style={{marginBottom:"20em"}} ></div>
      <Presentation/>
      <div style={{marginBottom:"20em"}} ></div>
      <Service/>
      <div style={{marginBottom:"20em"}} ></div>
      <Footer/>
        </div>
        )
  }
}

function mapStatetoProps(state){
  return  {user: state.user.connected}
}

export default connect(
  mapStatetoProps,
  null
)(Home);
