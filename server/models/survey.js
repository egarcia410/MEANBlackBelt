var mongoose = require('mongoose');

var SurveySchema = new mongoose.Schema({
	question: String,
	_user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	options: [{value: String, vote: {type: Number, default: 0}}]
},{timestamps: true});

mongoose.model('Survey', SurveySchema);