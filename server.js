var express = require('express');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


// app setup
var app = express();
// var api = require('./api/api');
var port = 8080;


// database setup
var mongoJS = require('mongojs');
var db = mongoJS('trello-clone', ['lists']);

// setup the app middlware
app.use(express.static('./public'));
app.use(bodyParser());
app.use(cors());

// setup the api
// app.get('/api/users', api.read);
// app.post('/api/users', api.create);
// app.put('/api/users', api.update);
// app.delete('/api/users', api.destroy);
// set up global error handling

// export the app for testing
module.exports = app;


app.listen(port, function() {
	console.log('I\'m watching you... creepy!!! ', port);
});