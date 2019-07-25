// import mongodb library
var mongoClient = require("mongodb").MongoClient;

// mongodb url
var url = "mongodb://127.0.0.1:27017";

//connect to mongodb Server
mongoClient.connect(url, function(err, db) {
    if(!err) {
        console.log("...Connected to MongoDb");
    } else {
        console.log(err);
    }
});
