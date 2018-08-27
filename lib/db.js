const mysql = require('mysql');
const db = mysql.createConnection(
  module.parent.exports.cfg.db
);

db.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

db.end((err) => {
});

module.exports = db;
