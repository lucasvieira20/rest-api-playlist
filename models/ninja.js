const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Ninja Schema & Model

const NinjaSchema = new Schema({
	name:{
		type: String,
		required:[true, 'Name field is Required']
	},

	rank:{
		type:String
	},

	available:{
		type: Boolean,
		default: false
	}

	//Add in GeoLocation
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;