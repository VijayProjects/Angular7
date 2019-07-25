// import fs module
var fs = require("fs");

// Implements fs
fs.readFile("E:\\ClassContent\\CoreJavaHK\\Opps\\College.java", (err, data) => {
    if(!err ) {
        console.log(data.toString());
    } else {
        console.log(err);
    }
});
console.log("...Read Completed...");
