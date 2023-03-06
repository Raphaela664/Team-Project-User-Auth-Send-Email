let express = require('express');
let bodyParser = require('body-parser');
let mysql = require('mysql');
let app = express();
let connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'itzone'
})
connection.connect(function (error) {
	if (error) throw error
	console.log('connected');
})
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });
const server = app.listen(8080,()=>{
		
		console.log("app was connected to port 8080");
	})
module.exports.server = server;
module.exports.app = app;
module.exports.database = connection;