import React from 'react';
import {  Navbar} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import '../App.css'


class Footer extends React.Component{
    render(){
        return(

<div className="row " >

    <Navbar expand="sm" style={{fontFamily:"Raleway", width: "100%", height:"15em" , display:"flex", justifyContent:"space-between", margin:"auto", backgroundColor:"#7A8AA8"}}>
        <div style={{margin:"auto",color:"white", textAlign:"center"}}>
       
          <p style={{fontSize:"1.3em"}}> Suivez-moi:</p>
          
            <div className="icons d-flex col-lg-12" style={{display:"flex", justifyContent:"space-between", width:"13em"}}>
            
            <a href="https://www.instagram.com/mathbrode/?hl=fr" ><img src="/instagram.png" className="instagram" style={{height:"4em", width:'4em'}} alt="Alt text" /></a> 
            {/* <a href="https://www.instagram.com/mathbrode/?hl=fr" ><FontAwesomeIcon icon={faLaptop} style={{color:"#121a28"}} className={"fa-3x"}/></a>   */}
            <a href="https://www.instagram.com/mathbrode/?hl=fr" ><img src="/facebook.png" className="facebook" style={{height:"4em", width:'4em'}} alt="Alt text" /></a>
            </div>
          
          <p style={{fontSize:"1.3em", marginTop:"1em"}}>Mathbrode© 2019</p>
        </div>
    </Navbar>

</div>

        )}
}


export default Footer;