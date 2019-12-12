import React, { useState } from 'react';



class MiniItem extends React.Component {
  


  render() {

  
  
return (


  <div className="col-lg-4 my-3">
      
    <div className="productTitle">
        {/* <img src="background 1.png"></img>
        <div className="transparentFilter">
        </div>
        <div className="text-block-mini">
          <p className="NomTaille">Nom<br/>12x35cm</p>
        </div> */}

<div class="overlay-image">
  <a href="#">
 <img class="image" src="background 1.png" alt="Alt text" />
 <div class="normal">
  <div class="text"></div>
 </div>
 <div class="hover">
 <img class="imageBlur" src="background 1.png" alt="" />
  <div class="text">Nom<br/>12x35</div>
 </div>
</a>
</div>

      
      
    </div>
  </div>



    )
}

}
export default MiniItem;