import React, { useState } from 'react';
import {
  Button,
} from 'reactstrap';
import '../App.css'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';


class FicheProduit extends React.Component {


    render() {

    

    return(

<div className="row justify-content-center">
    <div className="col-lg-10">

        <div className="text-block-black">
            <p>Fiche Produit</p>
        </div>
        

<div className="row justify-content-center">
        <img src="background 1.png" className=" col-lg-8" alt="Alt text" />


        <div className="row justify-content-center  col-lg-6">
        <div className="d-flex align-items-end">
            
        <p className="presentation" >Une petite description du produit; inspiration, couleur, matière etc ... Toutes les infos qui peuvent donner envie d'acheter. 
Une petite description du produit; inspiration, couleur, matière etc ... Une petite description du produit; inspiration, couleur, matière etc ... 
        </p>
        <div className="col-lg-3">
            <p className="description" >Info Pratiques :<br/>Prix: 14€<br/>Exemplaire: 3<br/>Taille: 35 x 45cm</p>
        </div>
        </div>
            
</div>





<div className="col-lg-8">

<div className="d-flex justify-content-center" >
<Button color="secondary">Ajouter</Button>
      </div>


    <div className="text-block-black-small">
    
        <p>Une Question?</p>
    </div>


            <Form>
      <Row form>

        <Col lg={6}>
          <FormGroup>
            
            <Input type="Nom" name="Nom" id="exampleNom" placeholder="Nom" />
          </FormGroup>
        </Col>
        <Col lg={6}>
          <FormGroup>
            
            <Input type="Email" name="Email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        
        <Input type="textarea" rows="4" name="Messsage" id="exampleMesssage" placeholder="Messsage"/>
      </FormGroup>

      <div className="d-flex justify-content-center" >
      <Button color="secondary">Envoyer</Button>    
      </div>
      
    </Form>

   
        </div>
        

      

        



</div>






</div>

        
        

    
</div>



    );


}


}


export default FicheProduit;
