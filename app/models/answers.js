var mongoose = require('mongoose'),
//url safe ids
shortid = require('mongoose-shortid'),
Schema = mongoose.Scheme;

var answerSchema = Schema({
	_id: shortid,
	q_id: [{ type: Schema.Types.ObjectId, ref:'Question'}]
	text: String,
	attachments: String,
	links, String
	votes: Number,
	posted_by: shortid
});

var Answer = mongoose.model('Answer', answerSchema);