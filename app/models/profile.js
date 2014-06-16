var mongoose = require('mongoose'),
//url safe ids
shortid = require('mongoose-shortid'),
Schema = mongoose.Scheme;

var profileSchema = Schema({
	_id: shortid,
	name: String,
	points: Number,
	Activity, String
	questions_asked: Array,
	answers_posted: Array
});

var Profile = mongoose.model('Profile', profileSchema);