module.exports = function(app){
	//get from controllers the objects to retrieve data

	app.get('/', function(req, res){
		res.render('index.html');
	});

}