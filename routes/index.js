var express = require('express');
var router = express.Router();
const {CardModel} = require("../db/index");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/submit", function(req, res){

  const {iconIndex, playerName, textarea} = req.body;

  const cardModel = new CardModel({iconIndex, playerName, textarea});

  cardModel.save((err, doc) => {
    if(err){
      res.send({code:0})
    }else{
      res.send({code:1, _id:doc._id})
    }
  })
})

router.get("/cards", function(req, res){
  CardModel.find({}, function(err, cards) {
    if(err){
      res.send({code:0});
    }else{
      res.send({code:1, data:cards});
    }
  })
})

router.get("/card", function(req, res){
  console.log(req.body);
  console.log(req.query);
  const _id = req.query._id;
  CardModel.findOne({_id}, (err, card) => {
    if(err){
      res.send({code:0});
    }else{
      res.send({code:1, data:card});
    }
  })
})

module.exports = router;
