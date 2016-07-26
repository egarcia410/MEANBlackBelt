var Users = require(__dirname + '/../controllers/Users');
var Surveys = require(__dirname + '/../controllers/Surveys');


module.exports = function(app){

	app.get('/', Users.index);//<--Render index page
	app.post('/', Users.create);//<--Create user
	app.post('/create', Surveys.create)//<--create survey
	app.get('/dashboard', Surveys.show)//<--show all surveys
	app.delete('/dashboard/:id', Surveys.delete)//<--delete survey
	app.get('/poll/:id', Surveys.showOne)//<--show one survey for poll page
	app.put('/poll/:id', Surveys.vote) 
	// app.get('/session', Users.session);//<---Logged in user

}



