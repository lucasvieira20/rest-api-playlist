const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//Set Up express App
const app = express();


app.use(bodyParser.json());

// Initialize Routes
app.use('/api',routes);

//Listen for requests
app.listen(process.env.port || 4000, function () {
	console.log('Now Listening for Requests');
});
