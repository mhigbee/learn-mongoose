var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongooge = require('mongoose')

// app setup
var app = express();
var heroCtrl = require('./api/controllers/heroCtrl');
var port = 8080;


//var db = mongojs('heroes', ['lists']);`


// database setup
var mongoUri = 'mongodb://localhost:27017/avengers';
mongoose.connect(mongoUri);

// setup the app middlware
app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(cors());

// setup the api
app.get('/api/heroes', heroCtrl.read);
app.post('/api/heroes', heroCtrl.create);
// app.put('/api/heroes', heroCtrl.update);
// app.delete('/api/heroes', heroCtrl.destroy);
// set up global error handling

// export the app for testing
module.exports = app;


app.listen(port, function() {
	console.log('I\'m watching you... creepy!!! ', port);
});