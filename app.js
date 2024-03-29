
/**
 * Module dependencies.
 */

var express = require('express');


// MongoDB Mongoose Connection

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mikoni')


// App Configuration

var app = module.exports = express.createServer();

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
	app.use(express.errorHandler()); 
});

// set up routes together with db
require('./routes.js').route(app, db);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
