const mysql = require("mysql");
let connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Bb>T00t@6",
    database: "burgers_DB"
  });
};
  connection.connect();
  module.exports = connection;