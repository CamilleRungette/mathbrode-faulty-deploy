import React, { useState } from 'react';
import {Card, Button,   Col, Row, Table, Form} from 'react-bootstrap';
import '../App.css';
import Navbar from './Navbar';


class Signin extends React.Component{
    constructor(){
        super();
        this.userCreate = this.userCreate.bind(this);
        this.state = {
                userFirstName: '',
                userLastName: '',
                userEmail: '',
                userPassword: '',
              }
        }

        userCreate(){
            console.log("click détécté")
            fetch('http://localhost:3000/users/sign-up', {
                    method: 'POST',
                    headers: {'Content-Type':'application/x-www-form-urlencoded'},
                    body: `first_name=${this.state.userFirstName}&last_name=${this.state.userLastName}&email=${this.state.userEmail}&password=${this.state.userPassword}&copy=1`
            })
           }

    render(){
        return(

<div>
            <Navbar></Navbar>


            <div class="container">


<div class="row">



   <div class="formUp text-center col-sm-3 offset-3 ">
        <h4 class="titleForm text-center login">Je me connecte !</h4>
       <form action="/users/sign-in" method="POST">

           <div class="form-group">
             <input name="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email"></input>
           </div>
           <div class="form-group">

             <input name="password" type="password" class="form-control"  placeholder="Mot de passe" ></input>
           </div>

           <button type="submit" class="btn btn-info">Se connecter</button>
         </form>
     </div>



   <div class="formIN text-center">
     <h4 class="titleForm login">Je m'inscris !</h4>

     <form action="/users/sign-up" method="POST">
       <div class="form-group">
           <input name="password" type="text" class="form-control" placeholder="Nom" required onChange={(e)=> this.setState({userLastName: e.target.value})}
                value={this.state.userLastName}></input>
         </div>
         <div class="form-group">
             <input name="password" type="text" class="form-control" placeholder="Prénom" required onChange={(e)=> this.setState({userFirstName: e.target.value})}
                value={this.state.userFirstName}></input>
           </div>
       <div class="form-group">
         <input name="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" required onChange={(e)=> this.setState({userEmail: e.target.value})}
                value={this.state.userEmail}></input>
       </div>
       <div class="form-group">
         <input name="password" type="password" class="form-control" placeholder="Mot de passe" required onChange={(e)=> this.setState({userPassword: e.target.value})}
                value={this.state.userPassword}></input>
       </div>
       <button type="submit" class="btn btn-info" onClick={this.userCreate}>S'inscrire</button>

     </form>
</div>

 </div>
 </div>
 </div>

   


        )}
}


export default Signin;