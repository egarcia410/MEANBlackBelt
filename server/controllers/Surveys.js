var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');
var User = mongoose.model('User');
// var Customer = mongoose.model('Customer');


module.exports = {

	create: function(req, res){
		console.log(req.body);
		var survey = new Survey ({
			question: req.body.question,
			_user: req.body.userID,
			options: [req.body.option1,req.body.option2,req.body.option3,req.body.option4]
		});
		survey.save(function(err, survey){
			res.json(survey);
		});
	},

	show: function(req, res){
		Survey.find({}).populate('_user').exec(function(err, surveys){
			res.json(surveys);
		});
	},
	//Remember to use "findOne", dont forget ONE!
	showOne: function(req, res){
		Survey.findOne({_id: req.params.id}).populate('_user').exec(function(err, survey){
			res.json(survey);
		});
	},

	delete: function(req, res){
		Survey.remove({_id: req.params.id}, function(err, survey){
			res.json(true);
		});
	},
	vote: function(req, res){
		Survey.findOne({_id: req.params.id}, function(err, survey){
			survey.options[req.body.index].vote++;
			survey.save(function(err, survey){
				res.json(survey)
			});
		});
	}
}