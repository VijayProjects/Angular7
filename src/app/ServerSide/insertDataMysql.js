var mysql = require("mysql");
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'angular7'
});
var product = {id:4, name:'Lee Boot Cooper', price: 1488.99};
con.query("insert into tblproducts SET?", product, (err, rows, field) => {
  if(!err) {
    console.log("Record is inserted..");
  }else {
    console.log(err);
  }
});