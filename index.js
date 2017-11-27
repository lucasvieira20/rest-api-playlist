const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Set Up express App
const app = express();

//Connect to MongoDB
var promise = mongoose.connect('mongodb://localhost', {
	useMongoClient: true,
});


app.use(bodyParser.json());

// Initialize Routes
app.use('/api', routes);

//Error Handling Middleware
app.use(function(err, req, res, next){
	res.status(422).send({error: err.message });
});

//Listen for requests
app.listen(process.env.port || 4000, function () {
	console.log('Now Listening for Requests');
});
