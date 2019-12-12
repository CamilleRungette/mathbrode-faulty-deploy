import React from 'react';



class MiniItem extends React.Component {
  render() {  
  return (
    <div className="col-lg-4 my-3">  
      <div className="productTitle">
        <div class="overlay-image">
          <a href="#">
            <img class="image" src={this.props.itemPhoto} alt="Alt text" />
            <div class="normal">
              <div class="text"></div>
            </div>
            <div class="hover">
              <img class="imageBlur" src="background 1.png" alt="" />
            <div class="text">{this.props.itemName}<br/>12x35</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )}
}
export default MiniItem;