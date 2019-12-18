import React, {Component} from 'react'
import ShopItem from './cards/Shop-item'
import Footer from './Footer'
import Navigbar from './Navbar'
import {Col} from 'reactstrap'


class Items extends Component{
  
  constructor(props){
    super(props);
    this.state={
      items: [],
    }
  }

  componentDidMount(){
    let ctx=this
    fetch('http://localhost:3000/items')
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      ctx.setState({items: data.allItems})
     console.log("THE STATE ===========>", ctx.state.items)
    })
    .catch(function(error){
      console.log("FAILED")
    });
  }

  render(){
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
    return(
      <div  style={{fontFamily:"Raleway"}}>
      <Navigbar/>

      <Col style={{margin:"auto"}}>
          <div className="col-6" style={{ margin:"auto", display:"flex", justifyContent:"center",flexWrap:"wrap"}} >
          <h1 style={{textAlign:"center", fontSize:"3.5em", marginTop:"0.5em"}}>La Boutique</h1>
          </div>
          <div style={{height:"6em"}}></div>

        <div className="col-lg-10" style={{ margin:"auto", display:"flex", flexWrap:"wrap"}}>     
            {itemsList}
        </div>
      </Col>

      <div style={{height:"8em"}}></div>

      <Footer/>
      
    </div>
    )
  }
}

export default Items;