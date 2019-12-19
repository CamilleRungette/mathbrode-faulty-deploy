import React from 'react';
import {Link} from 'react-router-dom'



class ShopItem extends React.Component {
  render() {  
  return (
   
    <div className="col-6 col-lg-4 my-3">  
    <Link to={`/item/${this.props.itemName}`}>
      <div className="productTitle">
        <div className="overlay-image">
            <img className="image" style={{height:"24em", objectFit:"contain"}} src={this.props.itemPhoto} alt={this.props.itemName} />
            <div className="normal">
              <div className="text"></div>
            </div>
            <div className="hover">
              <img className="imageBlur" style={{height:"24em", objectFit:"contain"}} src={this.props.itemPhoto} alt={this.props.itemName} />
            <div className="text">{this.props.itemName}<br/>{this.props.itemSize}</div>
            </div>
        </div>
      </div>
      </Link>
    </div>
  
  )}
}
export default ShopItem;