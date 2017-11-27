const express = require('express');
const routes = require('./routes/api');

//Set Up express App
const app = express();

// Initialize Routes
app.use('/api',routes);

//Listen for requests
app.listen(process.env.port || 4000, function () {
	console.log('Now Listening for Requests');
});
