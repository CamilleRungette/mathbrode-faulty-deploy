var express = require('express');
var router = express.Router();
UserModel = require('../models/user');
MessageModel = require('../models/message');
OrderModel = require('../models/order');
ItemOrderModel = require('../models/item_order');
var uid2 = require("uid2"); 
var SHA256 = require("crypto-js/sha256"); 
var encBase64 = require("crypto-js/enc-base64"); 


router.post('/sign-up', async function(req, res, next) {
  var salt = uid2(32); 
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
    password: SHA256(req.body.password+salt).toString(encBase64),
    token: uid2(32),
    salt: salt
  })

  newUser.save(function(error, user){
    let isUserExists;
    if (user){
    isUserExists = false
    console.log("NEW USER SAVED:", user)
    res.json({user, isUserExists, userExists})
    }else if (error){
      isUserExists = true
      console.log("USER NOR CREATED:", error)
      res.json({error, isUserExists})
    }
  });
}
})

router.post('/sign-in', async function(req, res, next){
  let thisUser = await UserModel.findOne({email: req.body.email})
  let userExists = await UserModel.findOne({email: req.body.email, password: SHA256(req.body.password + thisUser.salt).toString(encBase64)});

  console.log("USER EXISTS:", userExists)
  let isUserExists;

  if(userExists){
    isUserExists = true;
  } else{
    isUserExists = false;
  }

  res.json({isUserExists, userExists})
})

router.post('/create-message', async function (req, res, next){
  console.log("==================CREATE MESSAGE FUNCTION")
  newMessage = new MessageModel({
    object: req.body.object,
    content: req.body.content,
    user_id: req.body.user_id,
    item_id: req.body.item_id,
    sender_email: req.body.sender_email,
    sender_name: req.body.name,
    date: Date.now()
  })
  
  newMessage.save(function(error, message){
    if(message){
      console.log("MESSAGE SAVED", message)
      res.json({result:true, newMessage})
    } else{
      console.log("MESSAGE NOT SAVED:", error)
      res.json({error})
    }
  });

})

router.post('/order', function (req, res, next){
  console.log("coucou=================")
  console.log(req.body)
  Date.prototype.addDays = function(days) {
      this.setDate(this.getDate() + parseInt(days));
      return this;
  };
   var currentDate = new Date();
  newOrder = new OrderModel({
    user_id: req.body.user_id,
    total: req.body.total,
    date: Date.now(),
    sent: false,
    shipping_date: currentDate.addDays(4),
  })

  newOrder.save(function(error, order){
    if(order){
      items = JSON.parse(req.body.items)
      console.log("==============> ORDER SAVED", order ) 
      for(i=0; i < items.length; i++){
        newItemOrder = new ItemOrderModel({
          item_id: items[i]._id,
          price:items[i].price,
          name: items[i].name,
          order_id: newOrder._id,
          copy: 1
        })
        
          newItemOrder.save(function(error, item_order){
            if (error){
              console.log("ERROR:", error)
            } else if (item_order){
              console.log("ITEM_ORDER SAVED:", item_order)
            }
          });
        }
  res.json({order})
} else if (error){
  console.log("ORDER NOT SAVED:", error)
  res.json({error})
}
})

})



module.exports = router;

  // for(i=0; i < req.body.items.length; i++){
  //    newItemOrder = new ItemOrderModel({
  //      item_id: req.body.items[i]._id,
  //      price: req.body.items[i].price,
  //      name: req.body.items[i].name,
  //      order_id: newOrder._id,
  //      copy: 1
  //    })
     
  //      newItemOrder.save(function(error, item_order){
  //        if (error){
  //          console.log("ERROR:", error)
  //        } else if (item_order){
  //          console.log("ITEM_ORDER SAVED:", item_order)
  //        }
  //      });
  //    }