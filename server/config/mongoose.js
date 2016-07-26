//Responsible for connecting to DB, loads models in Models Folder
var mongoose = require('mongoose');

//Connect to DB
mongoose.connect('mongodb://localhost/surveys'); //<--Create DB name 

//Link to models by requiring
require(__dirname + '/../models/user');
require(__dirname + '/../models/survey');
