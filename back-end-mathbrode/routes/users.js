var express = require('express');
var router = express.Router();
UserModel = require('../models/user');
MessageModel = require('../models/message');


router.post('/sign-up', async function(req, res, next) {
  console.log("================ SIGN UP FUNCTION ===============")
  const userExists = await UserModel.findOne({ email: req.body.email})

  if (userExists){
    console.log("USER ALREADY EXISTS, CHANGE EMAIL")
    res.json({userExists})
  } else {
   newUser = new UserModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,  
  })

  newUser.save(function(error, user){
    if (user){
    console.log("NEW USER SAVED:", user)
    res.json({user})
    }else if (error){
      console.log("USER NOR CREATED:", error)
      res.json({error})
    }
  });
}
})

router.post('/sign-in', async function(req, res, next){
  console.log("=========================SIGN IN FUNCTION================");

  userExists = await UserModel.findOne({email: req.body.email, password: req.body.password})
  console.log("USER EXISTS:", userExists)
  let isUserExists;

  if(userExists){
    isUserExists = true;
  } else{
    isUserExists = false;
  }

  res.json({result: true, isUserExists})
})

router.post('/create-message', async function (req, res, next){
  console.log("==================CREATE MESSAGE FUNCTION")
  console.log(req.body)

  newMessage = new MessageModel({
    object: req.body.object,
    content: req.body.content,
    user_id: req.body.user_id,
    item_id: req.body.item_id,
    sender_email: req.body.sender_email,
    date: Date.now()
  })

  newMessage.save(function(error, message){
    if(message){
      console.log("MESSAGE SAVED", message)
      res.json({result:true, newMessage})
    } else{
      console.log("MESSAGE NOT SAVED:", error)
    }
  })

})


module.exports = router;
