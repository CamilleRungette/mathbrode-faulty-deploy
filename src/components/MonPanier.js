import React from 'react';
import {
  Button,
} from 'reactstrap';


class MonPanier extends React.Component {


    render() {

    

    return(

<div>

        <div className="text-block-black">
            <p>Mon Panier</p>
        </div>


    
        <div className="d-flex align-items-center col-lg-10 ">
            <img src="background 1.png" className=" col-lg-4 mb-3" alt="Alt text" />
        
        
            <div className="row justify-content-center  col-lg-4">
                <p className="presentation" >Nom du Produit</p>
            </div> 

            <div className="row justify-content-center  col-lg-4">
                <p className="presentation" >14 €</p>
            </div> 

            <div className="row justify-content-center  col-lg-4">
                 <img src="trash-alt-solid.svg" className=" col-lg-3 mb-3" alt="Alt text" />
            </div> 

        </div>  


        <div className="d-flex align-items-center col-lg-10">
            <img src="background 1.png" className="col-lg-4 mb-3" alt="Alt text" />
        
        
            <div className="row justify-content-center  col-lg-4">
                <p className="presentation" >Nom du Produit</p>
            </div> 

            <div className="row justify-content-center  col-lg-4">
                <p className="presentation" >18 €</p>
            </div> 

            <div className="row justify-content-center  col-lg-4">
                 <img src="trash-alt-solid.svg" className=" col-lg-3 mb-3" alt="Alt text" />
            </div> 

        </div>  


        <div className="d-flex align-items-center col-lg-10 ">
            <img src="background 1.png" className=" col-lg-4 mb-3" alt="Alt text" />
        
        
            <div className="row justify-content-center  col-lg-4">
                <p className="presentation">Nom du Produit</p>
            </div> 

            <div className="row justify-content-center  col-lg-4">
                <p className="presentation" >25 €</p>
            </div> 

            <div className="row justify-content-center  col-lg-4">
                 <img src="trash-alt-solid.svg" className=" col-lg-3 mb-3" alt="Alt text" />
            </div>  

        </div>  




       <div className="d-flex justify-content-center col-lg-12">  
            <div className="justify-content-center col-lg-6">          
                <Button color="secondary">Continuer mes Achats</Button>
            </div>
            <div>
                <Button color="secondary">Confirmer</Button>
            </div>
                
        </div>


</div>    




    );


}


}


export default MonPanier;
