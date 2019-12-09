var express = require('express');
var router = express.Router();
ItemModel = require('../models/item')

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