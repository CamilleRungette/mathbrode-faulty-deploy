var express = require('express');
var router = express.Router();
UserModel = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// // ADMIN 
// router.post('/create-item', {
//   // Via un formulaire dans le dashboard administrateur, création de nouveaux produits en bases de données afin de pouvoir les afficher 
// })

// router.get('/show-orders', {
//   //La page de récapitulatif de toutes les connades passées et en cours + l'affichage dans le carré du dashboard 
// })

// router.put('/update-item', {
//   //la possibilité de modifier les produits via la liste d'inventaire 
// })

// router.get('/delete-item', {
//   // la possibilité de supprimer un produit depuis l'inventaire, ou que le produit se supprime automatiquement si le sotck arrive à 0
// })

// router.get('/show-message', {
//   // DEpuis le dashboard, l'admin a accès aux messages des utilisateurs 
// })

// router.get('/update-intro', {
//   // La possibilité de modifier la partie présentation ainsi que la photo 
// })

// router.post('/create-class'{
//   //Description des cours proposés
// })

// router.post('/admin/event', {
//   //Un formulaire pour créer les événements auxquels elle participera 
// })


// //USER
// router.post('/sign-in'{

// })

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

// router.get('/basket'{
//   //Le panier utilisateur
// })

// router.get('/user/orders'{
//   // accès aux commandes passées
// })

// router.post('/message-class', {
//   //L'utilisateur peut la contacter à propos d'un cours 
// })

// router.post('/message-project',{
//   //La possibilité de contacter mathilde pour un projet personnalisé
// })

// router.get('/message-event', {
//   //Accès à la page qui répertorie les événements de Mathilde
// })

// router.get('/item/:id',{
//   //Page fiche produit 
// })

// router.post('/add-item',{
//   //Ajouter un produit à mon panier
// })

// router.post('/message-item', {
//   //Contacter Mathilde par rapport à un produit
// })

// router.post('/basket-delete', {
//   //Supprimer un produit du panier
// })

// router.get('/basket-buy', {
//   //Passer commande depuis le panier
// })


module.exports = router;