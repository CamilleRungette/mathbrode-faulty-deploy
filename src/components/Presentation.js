import React from 'react';
import {
  Button,} from 'reactstrap';
import '../App.css'


class Presentation extends React.Component {


    render() {

    

    return(

<div className="row justify-content-center" style={{fontFamily:"Raleway"}}>
    <div className="col-lg-8">
      <h1 style={{fontSize:"4em", textAlign:"center"}}> <em>Je me présente</em></h1>
      <div style={{height:"10em"}}></div>

<<<<<<< HEAD
        <div className="text-block-black">
            <p>Je me présente</p>
        </div>

        <div className="row d-flex align-items-center justify-content-center">

            
            <img src="presentation.png" className="col-lg-5" alt="Alt text" />
            

            <div className="row justify-content-center  col-lg-5">
                <p className="presentation" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
             <div>

=======
<div className="row justify-content-center" style={{ display:"flex", alignItems:"center"}} >
        <img src="presentation.png" className=" col-lg-5" style={{marginRight:"4em"}} alt="Alt text" />
        
        <p className="presentation col-lg-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        <div className="row justify-content-center">
>>>>>>> development
            <Button color="secondary">me contacter</Button>
            
        </div>
       
       
    </div>
                                    
      
</div>



    </div>
</div>

    );


}


}


export default Presentation;
