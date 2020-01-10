import React from 'react';
import {
  Button,
} from 'reactstrap';
import '../App.css'
import ShopItem from './cards/Shop-item'
import {Link} from 'react-router-dom'

class Creations extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      items: [],
    }
  }

  componentDidMount(){
    let ctx=this
    fetch('http://localhost:3000/items-creations')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({items: data.allItems})
    })
    .catch(function(error){
      console.log("FAILED")
    });
  }


  render() {
    let itemsList = this.state.items.map(function(item, i){
      return <ShopItem key={i}
       itemCopy={item.copy}
       itemName={item.name}
       itemDesc={item.desc}
       itemPrice={item.price}
       itemShipFee={item.shipping_fee}
       itemSize={item.size}
       itemPhoto={item.photo}
       itemId={item._id}
      />
    })


 return (
  



    <div className="row justify-content-center">
        <div className="col-lg-8">
      

              <div style={{fontFamily:"Raleway"}}>
                <h1 style={{fontSize:"4em", textAlign:"center"}}> Mes Créations </h1>
                <div style={{height:"5em"}}></div>

              <div className="row" style={{display:"flex"}}>
                {itemsList}
              </div>
             
              </div>


              <div style={{height:"2em"}}></div>
              <div className="row" style={{display:"flex", justifyContent: "center"}}>
                <Link to="/items"> <Button style={{fontSize:"1.3em", backgroundColor:"#1b263b", fontFamily:"Raleway"}}> En voir plus...</Button> </Link>
              </div>



        </div>

    </div>
    
    







  
 

  );

}

}


export default Creations;