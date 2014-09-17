var express = require('express');
var router = express.Router();
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root', 
  database : 'test',
  port: 3307
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET Custom home page. */
 router.get('/hello', function(req, res) {
 	connection.connect();
 	connection.query('SELECT * FROM persons;', function(err, rows, fields) {
 	// connection.query('UPDATE persons SET PersonID=2 WHERE FristName="Shambhu";', function(err, rows, fields) {
 		 res.render('hello', {users : rows});
 		if (err) throw err;
 		console.log( 'the data comes from :');
 		console.log(rows);

 	});

 	connection.end();
 });

module.exports = router;
