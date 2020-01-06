var express = require('express');
var router = express.Router();
EventModel = require('../models/event')
ItemsModel = require('../models/item')
WorkshopModel = require ('../models/workshops')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/events', async function(req, res, next){
  allEvents = await EventModel.find(function(err, events){
    console.log(events)
  })

  res.json({result: true, allEvents})
})

router.get('/items', async function(req, res, next){
  allItems = await ItemsModel.find(function(err, items){
    console.log("créations")
  })
  res.json({allItems})
})

router.get('/items-creations', async function(req, res, next){
  allItems = await ItemsModel.find({first_presentation: true })
  res.json({allItems})
})


router.get('/find-items', async function(req, res, next){
  console.log("in the find item method ==============")
  thisItem = await ItemsModel.findOne({ name: req.query.name})
  console.log(thisItem)

  res.json({thisItem})
})

router.get('/workshops', async function(req, res, next){
  console.log("============= IN THE FIND CLASSES METHOD ==============")
  allWorkshops = await WorkshopModel.find(function(err, workshops){
    console.log(workshops)
  })
  res.json({allWorkshops})
})


// //USER
// router.post('/message-class', {
//   //L'utilisateur peut la contacter à propos d'un cours 
// })


module.exports = router;