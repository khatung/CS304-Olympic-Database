const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "password",
  database: "olympic",
});

db.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

module.exports = db;
