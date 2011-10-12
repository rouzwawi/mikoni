module.exports.route = function(app, db) {

	// Mongoose Models
	
	var models = require('./model/models.js');
	var Chi = models.Chi(db);


	// Routes

	// Sample Chi page
	app.get('/:title', function(req, res) {
		var t = req.params.title;
		Chi.findOne({title: t}, function(err, chi) {
			if (err) return;
			if (!chi) {
				new Chi({title: t}).save();
			}
		});
		
		res.render('sample', { title: t, ogtitle: t, url: t });
	});

	
	// Root route
	app.get('/', function(req, res) {
		res.render('index', { title: 'Home', ogtitle: 'Mikoni | Home', url: '' });
	});

};
