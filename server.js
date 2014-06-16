var http = require('http'),
express = require('express'),
path = require('path'),
passport = require('passport'),
hogan = require('hogan-express');

var app = express();
var port = 3000;

app.set('port', process.env.PORT || port)
//app.set('views', path.join(__dirname, 'app/views'));
//settng the engine to plain html
app.set('view engine', 'html');

//can configure what 'html' stands for aka what template
app.engine('html', hogan);

app.set(express.static(path.join(__dirname, 'public')));

//now load development environment
var env = process.env.NODE_ENV || 'development';

var config = require('./config/config')[env],
mongoose = require('mongoose');

var connect = function(){
	var mongoose_options = { server:{ socketOptions: { keepAlive:1 }}};
	mongoose.connect(config.db, mongoose_options);
}

mongoose.connection.on('error', function(err){
	console.log(err);
});
mongoose.connection.on('disconnected', connect);

require('./config/express')(app, config, passport, mongoose.connection);
require('./config/routes')(app);

app.listen(port);
console.log("Node server started on port "+port);