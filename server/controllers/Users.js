var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

	index: function(req, res){
		res.render('index')
	},

	// session: function(req, res){
	// 	if(!req.session.user) return res.send({err: "not logged"})
		
	// 	return res.send(req.session.user)
	// },

	create: function(req, res){
		User.findOne({name: req.body.name}, function(err, user){
			if(user){
				// req.session.user = user
				res.json(user);
			} else {
				var user = new User(req.body)
				user.save(function(err, user){
					// req.session.user = user
					res.json(user);
				});	
			}
		})
	},
}



