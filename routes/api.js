const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//Get a List of ninjas from the database
router.get('/ninjas', function(req, res, next){
	res.send({
		type:'GET'
	});
});


//Add a new ninja to the db
router.post('/ninjas', function(req, res, next){

	//Short Method - Good Practices
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	}).catch(next);
});

//Update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
	res.send({
		type:'PUT'
	});
});

//Delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
	res.send({
		type:'DELETE'
	});
});

module.exports = router;