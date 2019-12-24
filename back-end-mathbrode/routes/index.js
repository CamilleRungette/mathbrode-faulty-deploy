var express = require('express');
var router = express.Router();
let request = require("async-request");
EventModel = require('../models/event')
ItemsModel = require('../models/item')



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


// // ADMIN 

// router.get('/show-orders', {
//   //La page de récapitulatif de toutes les connades passées et en cours + l'affichage dans le carré du dashboard 
// })

// router.put('/update-item', {
//   //la possibilité de modifier les produits via la liste d'inventaire 
// })

// router.get('/delete-item', {
//   // la possibilité de supprimer un produit depuis l'inventaire, ou que le produit se supprime automatiquement si le sotck arrive à 0
// })

// router.get('/update-intro', {
//   // La possibilité de modifier la partie présentation ainsi que la photo 
// })

// router.post('/create-class'{
//   //Description des cours proposés
// })

// //USER

// router.get('/basket'{
//   //Le panier utilisateur
// })

// router.get('/user/orders'{
//   // accès aux commandes passées
// })

// router.post('/message-class', {
//   //L'utilisateur peut la contacter à propos d'un cours 
// })

// router.get('/item/:id',{
//   //Page fiche produit 
// })

// router.post('/add-item',{
//   //Ajouter un produit à mon panier
// })

// router.post('/basket-delete', {
//   //Supprimer un produit du panier
// })

// router.get('/basket-buy', {
//   //Passer commande depuis le panier
// })


module.exports = router;