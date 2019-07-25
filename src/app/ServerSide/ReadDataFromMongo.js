// import mongodb library
var mongoClient = require("mongodb").MongoClient;

// Mongodb Server url
var url = "mongodb://127.0.0.1/27017";

// connect mongodb client to mongodb server
mongoClient.connect(url, (error, dbConnection) => {
    if(!error) {
       dbConnection.db("angular7").collection("sampletable").find().toArray((err, records) => {
        if(!err) {
            console.log(records);
        } else {
            console.log(err);
        }
       });
    } else {
        console.log(error);
    }
});