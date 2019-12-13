import React from 'react';
import {Link} from 'react-router-dom'


class MiniItem extends React.Component {
  


  render() {

  
  
return (


  <div className="col-lg-4 my-3">
      
    <div className="productTitle">


<Link to="/item" >
  
<div class="overlay-image">
 
  <a href="#">
 <img class="image" src="background 1.png" alt="Alt text" />
 <div class="normal">
  <div class="text"></div>
 </div>
 <div class="hover">
   <div class="zoom">
 <img class="imageBlurZoom" src="background 1.png" alt="" />
  <div class="text">Nom<br/>12x35</div>
  </div>
 </div>
</a>
</div>

class MiniItem extends React.Component {
  render() {  
  return (
    <div className="col-lg-4 my-4">  
      <div className="productTitle">
        <div class="overlay-image">
          <Link to={`/item/${this.props.itemName}`} >
            <img class="image" style={{height:"24em", objectFit:"contain"}} src={this.props.itemPhoto} alt={this.props.itemName} />
            <div class="normal">
              <div class="text"></div>
            </div>
            <div class="hover">
              <img class="imageBlur" style={{height:"24em", objectFit:"contain"}} src={this.props.itemPhoto} alt={this.props.itemName} />
            <div class="text">{this.props.itemName}<br/>{this.props.itemSize}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )}
}
export default MiniItem;