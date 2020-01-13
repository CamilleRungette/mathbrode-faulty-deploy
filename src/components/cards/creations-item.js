import React from 'react';
import {Link} from 'react-router-dom'



class CreationItem extends React.Component {
  render() {  
  return (
   
    <div className="col-sm-6 col-lg-4 col-xs-12 my-3">  
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
export default CreationItem ;