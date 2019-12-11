import React from 'react';
import {  Navbar} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'


class Footer extends React.Component{
    render(){
        return(

<div className="row" >

    <Navbar expand="md" style={{fontFamily:"Raleway", width: "100%", height:"16em" , display:"flex", justifyContent:"space-between", margin:"auto", backgroundColor:"#7A8AA8"}}>
        <div style={{margin:"auto",color:"white", textAlign:"center"}}>
          <p style={{fontSize:"1.3em"}}> Suivez-moi:</p>
            <a href="https://www.instagram.com/mathbrode/?hl=fr" ><FontAwesomeIcon icon={faLaptop} style={{color:"#121a28"}} className={"fa-3x"}/></a>            
          <p style={{fontSize:"1.3em", marginTop:"1em"}}>Mathbrode© 2019</p>
        </div>
    </Navbar>

</div>

        )}
}


export default Footer;