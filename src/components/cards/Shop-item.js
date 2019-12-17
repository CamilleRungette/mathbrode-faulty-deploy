import React from 'react';
import {Link} from 'react-router-dom'



class ShopItem extends React.Component {
  render() {  
  return (
   < Link to={`/item/${this.props.itemName}`}>
    <div className="col-6 col-lg-4 my-3">  
      <div className="productTitle">
        <div class="overlay-image">
            <img class="image" src={this.props.itemPhoto} alt={this.props.itemName} />
            <div class="normal">
              <div class="text"></div>
            </div>
            <div class="hover">
              <img class="imageBlur" src={this.props.itemPhoto} alt={this.props.itemName} />
            <div class="text">{this.props.itemName}<br/>{this.props.itemSize}</div>
            </div>
        </div>
      </div>
    </div>
    </Link>
  )}
}
export default ShopItem;