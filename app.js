var express = require('express');
var app= express();
var bodyParser = require('body-parser');
var mongoose= require('mongoose');
var config = require('./config');
var setupSeedDataController = require('./controllers/setupSeedDataController');
var apiController = require('./controllers/apiController');

//setup middleware
app.use('/assets', express.static(__dirname +'/public'));

//connect to mongoose
mongoose.connect(config.getDBConnectionString());

//line up controllers routes here
setupSeedDataController(app);

apiController(app);


var PORT = process.env.PORT || 3000;

app.listen(PORT);