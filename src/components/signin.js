import React, { useState } from 'react';
import {Card, Button,   Col, Row, Table, Form} from 'react-bootstrap';
import '../App.css';
import Navbar from './Navbar';
import {Redirect } from 'react-router-dom';


class Signin extends React.Component{
    constructor(){
        super();
        this.userCreate = this.userCreate.bind(this);
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this)
        this.state = {
                userFirstName: '',
                userLastName: '',
                userEmail: '',
                userPassword: '',
                SignInEmail:'',
                SignInPassword:'',
                isUserExist:false
              }
        }

        userCreate(){
            console.log("click détécté")
            fetch('http://localhost:3000/users/sign-up', {
                    method: 'POST',
                    headers: {'Content-Type':'application/x-www-form-urlencoded'},
                    body: `first_name=${this.state.userFirstName}&last_name=${this.state.userLastName}&email=${this.state.userEmail}&password=${this.state.userPassword}&copy=1`
            }
            ).then(function(res, err){
                return res.json()
              }).then(data => {
          
                console.log('Dans mon fetch -->',data)
           
                  this.setState({
                    isUserExist:true
                  })
                })
           }

           handleSubmitSignIn(){

            console.log('Dans HandleSubmitIn',this.state.SignInEmail)
        
            fetch(`http://localhost:3000/users/sign-in?email=${this.state.SignInEmail}&password=${this.state.SignInPassword}`)
            .then(response => response.json())
            .then(data => {
        
              console.log('Dans mon fetch -->',data)
        
              // NE FONCTIONNE PAS
              if(data.isUserExist){
        
                this.setState({
                  isUserExist:true
                })
                
              }
        
            });
        
          }

    render(){

        if(this.state.isUserExist){
            return <Redirect to='/' />
            } 

        return(

<div>
            <Navbar></Navbar>


            <div class="container">


<div class="row">



   <div class="formUp text-center col-sm-3 offset-3 ">
        <h4 class="titleForm text-center login">Je me connecte !</h4>
       <form action="" method="POST">

           <div class="form-group">
             <input name="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email" onChange={(e)=> this.setState({SignInEmail: e.target.value})}
                value={this.state.SignInEmail}></input>
           </div>
           <div class="form-group">

             <input name="password" type="password" class="form-control"  placeholder="Mot de passe" onChange={(e)=> this.setState({SignInPassword: e.target.value})}
                value={this.state.SignInPassword}></input>
           </div>

           <button type="submit" class="btn btn-info" onClick={this.handleSubmitSignIn}>Se connecter</button>
         </form>
     </div>



   <div class="formIN text-center">
     <h4 class="titleForm login">Je m'inscris !</h4>

     <form action="" method="POST">
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