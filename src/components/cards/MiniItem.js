import React from 'react';
import {Link} from 'react-router-dom'



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