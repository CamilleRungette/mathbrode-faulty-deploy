import React  from 'react';
import {  Button} from 'reactstrap';
import '../App.css'
import { Col, Row, Form, FormGroup, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer'

class ItemPresentation extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      desc: '',
      copy:'',
      photo: '',
      price: '',
      shipping_fee: '',
      size:'',
        }
    console.log("PROPS", this.props.match.params.id)  
  }

  componentDidMount(){
    let ctx = this
  fetch(`http://localhost:3000/find-items?name=${this.props.match.params.id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
       console.log("THE STATE ===========>", data.thisItem)
       ctx.setState({
         name: data.thisItem.name,
         desc: data.thisItem.description,
         copy: data.thisItem.copy,
         photo: data.thisItem.photo,
         price: data.thisItem.price,
         shipping_fee: data.thisItem.shipping_fee,
         size: data.thisItem.size
       })
      })
    }

    render() {
   return(
<div>
  <Navbar />
    <div className="row justify-content-center" style={{fontFamily:"Raleway"}}>
      <div className="col-lg-10" >
      <div style={{height:"5em"}}></div>
        <div>
          <p style={{textAlign:"center", fontSize:"3em"}}>{this.state.name}</p>
        </div>

        <div className="row col-lg-7 border" style={{margin:"auto"}} >
        <img src={this.state.photo} className=" col-lg-8" style={{height:"40em", objectFit:"contain", margin:"auto"}} alt="Alt text" />
          <div className="col-lg-9" style={{margin:"auto"}}>
            <div style={{display:"flex", justifyContent:"center"}}>
              <Row> 
                <Col sm={8}>          
                  <p style={{fontSize:"1.5em"}}> {this.state.desc} </p>
                </Col>
                <Col>
                  <p className="" >Info Pratiques :<br/>
                  Prix: {this.state.price}€<br/>
                  Exemplaire: {this.state.copy}<br/>
                  Taille: {this.state.size}</p>
                </Col>
            </Row>          
            </div> 
              <div className="d-flex justify-content-center mb-4" >
                <Link to="/basket" ><Button style={{backgroundColor:"#1b263b"}}>Ajouter</Button></Link>
              </div>
          </div>
        </div>

            <div className="text-block-black-small">
              <p>Une Question?</p>
            </div>
            <Form className="col-lg-9 mx-auto">
              <Row form>
                <Col lg={6}>
                  <FormGroup>
                    <Input type="Nom" name="Nom" id="exampleNom" placeholder="Nom" />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Input type="Email" name="Email" id="exampleEmail" placeholder="Email" />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Input type="textarea" rows="4" name="Messsage" id="exampleMesssage" placeholder="Messsage"/>
              </FormGroup>
              <div className="d-flex justify-content-center" >
                <Button  style={{backgroundColor:"#1b263b"}} >Envoyer</Button>    
              </div>
            <div style={{height:"5em"}}></div>
            </Form>
      </div>
    </div>
  <Footer/>
</div>
)}
}

export default ItemPresentation;
