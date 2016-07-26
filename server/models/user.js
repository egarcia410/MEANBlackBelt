var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
}, {timestamps: true});

mongoose.model('User', UserSchema);