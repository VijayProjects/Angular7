var mysql = require("mysql");
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'angular7'
});

con.connect();
con.query("select * from tblproducts",(err, rows, fields) => {
  if(!err) {
    console.log(rows);
  } else {
    console.log(err);
  }
});