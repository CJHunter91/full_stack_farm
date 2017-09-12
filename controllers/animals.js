var express = require('express');
var animalRouter = express.Router();
var MongoClient = require('mongodb').MongoClient;

var db;
  //get animals for DB send back to client

MongoClient.connect('mongodb://localhost:27017/farm', function(err,database){
  if(err) return;
  db = database;
})

//animals INDEX

animalRouter.get('/', function(req, res){
  db.collection('animals').find().toArray(function(err,results){
    if(err) console.log("oops" + err);
    res.json(results);
  })
})

//show

//edit

//update

//create
animalRouter.post('/', function(req, res){
  console.log(req.body)
  db.collection('animals').insert({
    name: req.body.name,
    type: req.body.type
    }, function(err, response){
      res.json(response)
    });
  db.collection('animals').find().toArray(function(err,results){
    if(err) console.log("oops" + err);
    res.json(results);
  })

})
//delete

module.exports = animalRouter;