var express = require('express');
var express = require('express');
var bodyParser = require('body-parser');


// app setup
var app = express();
var api = require('./api/api');
var port = 8080;

// setup the app middlware
app.use(express.static('../client'));
app.use(bodyParser());

// setup the api
app.get('/api/users', api.read);
app.post('/api/users', api.create);
app.put('/api/users', api.update);
app.delete('/api/users', api.destroy);
// set up global error handling

// export the app for testing
module.exports = app;


app.listen(port, function() {
	console.log('I\'m watching you... creepy!!! ', port);
});