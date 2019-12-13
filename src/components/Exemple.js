import React, {Component} from 'react'

class Exemple extends Component{
constructor(){
  super();
  this.uploadImage = this.uploadImage.bind(this)
  this.state={
    image:'',
    loading: 'false'
  }
}

  async uploadImage(e){
    const files = e.target.files
    const data= new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'camille')
    this.setState({loading: true})
    const res = await fetch('https://api.cloudinary.com/v1_1/dduugb9jy/image/upload', {
        method: 'POST',
        body: data
      })
    const file = await res.json()
    
    this.setState({image: file.secure_url})
    this.setState({loading: false})
  }

  render(){
    if (this.state.loading){
      return(
        <div>
          <h1>Upload image</h1>
          <input type="file"
          placeholder="upload an image"
          onChange={this.uploadImage} 
           />
        <h3>Loading</h3>
        </div>
      )
    } else {
      console.log("================ la photo:", this.state.image)
      return (
        <div>
        <img src={this.state.image} style={{width:"30em"}} />
        </div>
      )
    }
  }
}

export default Exemple;