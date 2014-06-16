var mongoose = require('mongoose'),
//url safe ids
shortid = require('mongoose-shortid'),
Schema = mongoose.Scheme;

var qtrack = Schema({
	q_id: [{__id: Schema.Types.ObjectId, ref:'Question'}],
	user_id: [{__id: Schema.Types.ObjectId, ref:'Question'}],
	vote: Boolean
});

var TrackQ = mongoose.model('TrackQ', qtrack);