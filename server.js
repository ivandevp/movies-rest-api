var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./config/router');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, function() { 
	console.log("Server started on port 3000")
});