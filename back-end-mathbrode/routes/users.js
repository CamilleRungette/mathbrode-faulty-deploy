var express = require('express');
var router = express.Router();
UserModel = require('../models/user')


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



module.exports = router;
