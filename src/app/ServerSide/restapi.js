var mongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');
 
var server = express();
 
//Configure Database Connection
var url = "mongodb://127.0.0.1:27017";

// parse appllication/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
server.use(bodyParser.json())
 
//create REST api request for get all products
server.get("/getProducts", (request, response) => {
  mongoClient.connect(url, (err, db) => {
    if(!err) {
      db.db("angular7").collection("sampletable").find().toArray((err, documents) => {
        if(!err) {
          response.send(documents);
        } else {
          console.log(err);
        }
      });
    }else {
      console.log(err);
    }
  });
});

//create a rest api request to insert product
server.post("/addProduct", (request, response) => {
  var product = {
    id: request.body.Id, 
    name: request.body.Name, 
    price: request.body.Price
  };
  mongoClient.connect(url, (err, db) => {
    if(!err) {
      db.db("angular7").collection("sampletable").insert(product);
      response.send("Record is Inserted..!");
    }else {
      console.log(err);
    }
  });
});

//server listen port 
server.listen(8181);
console.log("Server is Started with:http://127.0.0.1:8181");

