module.exports.route = function(app, db) {

	// Mongoose Models
	
	var models = require('./model/models.js');
	var Chi = models.Chi(db);


	// Routes
	
	// Root route
	app.get('/', function(req, res) {
		res.render('index', { title: 'Home'});
	});

	// Testing route
	app.all('/test/:title', function(req, res) {
		var q = {title:req.params.title};
		Chi.findOne(q, function(e,item) {
			res.render('test', {
			    title: 'Test'
			  , item: item
			});
		});
	});

};
