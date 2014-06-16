var mongoose = require('mongoose'),
//url safe ids
shortid = require('mongoose-shortid'),
Schema = mongoose.Scheme;

var atrack = Schema({
	a_id: [{__id: Schema.Types.ObjectId, ref:'Question'}],
	user_id: [{__id: Schema.Types.ObjectId, ref:'Question'}],
	vote: Boolean
});

var TrackA = mongoose.model('TrackA', atrack);