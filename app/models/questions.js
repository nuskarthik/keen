var mongoose = require('mongoose'),
//url safe ids
shortid = require('mongoose-shortid'),
Schema = mongoose.Scheme;

var questionSchema = Schema({
	_id: shortid,
	title: String,
	desc: String,
	votes: Number,
	posted_by: shortid,
	tags: Array,
	endorsed_by: shortid
});

var Question = mongoose.model('Question', questionSchema);