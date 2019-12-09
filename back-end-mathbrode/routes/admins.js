var express = require('express');
var router = express.Router();
ItemModel = require('../models/item');
AdminModel = require('../models/admin');

router.post('/create-admin', function (req, res, next){
    newAdmin = AdminModel({
        name: "Mathilde",
        email: "blabla@gmail.com",
        password: "broderie"
    })

    newAdmin.save(function(error, admin){
        if (error){
            console.log("ADMIN NOT SAVED:", error)
            res.json({error})
        } else if (admin){
            console.log("ADMIN SAVED", admin)
            res.json({admin})
        }
    })

})

router.post('/sign-in', async function(req, res, next){
    adminExists = await AdminModel.findOne({email: "blabla@gmail.com", password: "broderie" });
    let isAdminExists;

    if(adminExists){
        isAdminExists = true;
    } else if (!isAdminExists) {
        isAdminExists = false
    };
    res.json({isAdminExists})
})

router.post('/create-item', async function(req, res, next){
  console.log("============== IN THE CREATE ITEM FUNCTION===========");
  const itemExists = await ItemModel.findOne({name: req.body.name})
  console.log("Item exists:\n", itemExists)

  if(itemExists){
      let message = "Il existe déjà un item avec ce nom."
      console.log("ERROR: Item already exists")
      res.json({message})
  } else{
    newItem = new ItemModel({
        name: req.body.name,
        price: req.body.price,
        size: req.body.size,
        description: req.body.description,
        copy: req.body.copy,
        first_presentation: req.body.first_presentation,
    })

    newItem.save(function(error, item){
        if (item){
        console.log("NEW item SAVED:", item)
        res.json({item})
        }else if (error){
        console.log("item NOT CREATED:", error)
        res.json({error})
        }
    });
}
});





module.exports = router;