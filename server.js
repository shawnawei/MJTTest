//load express, path module
var express = require ('express');
var path = require('path');
var ejs = require('ejs');
var routes = require('./routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var subject = require('./models/subjects');
//var project = require('./models/projects');

var app = express();
var port = 3000;


//connect to mongoose

mongoose.connect('mongodb://localhost/test', function(err){
    if(!err){
        console.log('connected to mongoDB');
    } else{
        throw err;
    }
});

//configure app
//===========================

//app.set('view engine','html');
//app.engine('html',ejs.renderFile);

//dirname is the folder that contains this script(server.js)
app.set('views', path.join(__dirname, './client/views'));


//use middleware
//===============================
app.use(express.static(path.join(__dirname,'/client')));
app.use(bodyParser());

//define routes
//=============================s====
app.use (require('./routes'));


app.listen(port, function() {
	console.log('ready on port ' + port);
});






















/*
var http = require('http');
var port = 3000;
http.createServer( function(request, response){
	response.end('MJTLab Data Repository');
}).listen(port);

console.log('Connected');
*/