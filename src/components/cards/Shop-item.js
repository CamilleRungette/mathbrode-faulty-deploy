import React from 'react';



class ShopItem extends React.Component {
  render() {  
  return (
    <div className="col-lg-4 my-3">  
      <div className="productTitle">
        <div class="overlay-image">
          <a href="#">
            <img class="image" src={this.props.itemPhoto} alt={this.props.itemName} />
            <div class="normal">
              <div class="text"></div>
            </div>
            <div class="hover">
              <img class="imageBlur" src={this.props.itemPhoto} alt={this.props.itemName} />
            <div class="text">{this.props.itemName}<br/>{this.props.itemSize}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )}
}
export default ShopItem;