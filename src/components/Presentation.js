import React from 'react';
import {
  Button,} from 'reactstrap';
import '../App.css'


class Presentation extends React.Component {
    render() {
    return(

<div className="row justify-content-center " style={{fontFamily:"Raleway"}}>
  <div>
  <h1 style={{fontSize:"4em", textAlign:"center"}}> <em>Je me présente</em></h1>
  <div style={{height:"8em"}}></div>
      <div className="col-lg-9 mx-auto" style={{ display:"flex", alignItems:"center"}} >
      <img src="presentation.png" className=" col-lg-6" style={{marginRight:"4em"}} alt="Alt text" />
        <div>
        <p  style={{fontSize:"1em"}} className="col-lg-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
          <Button color="secondary">me contacter</Button>
          </div>
      </div>
  </div>
</div>

)}
}


export default Presentation;
