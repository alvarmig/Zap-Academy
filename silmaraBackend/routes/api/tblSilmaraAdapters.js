const express = require('express');
const mysql = require('mysql');
const router = express.Router(); // required to use routes

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'oracle',
  database: 'silmara'
});

// Connect
connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
  console.log('MySQL Connected');
});

// Select Items
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM products';
  let query = connection.query(sql, (err, results) => {
    if (err) throw err;

    res.json(results);
    console.log(results);
    //res.send('Posts fetched...');
  });
  //connection.end();
});

module.exports = connection;
module.exports = router;
