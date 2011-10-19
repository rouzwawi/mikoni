module.exports.route = function(app, db) {

	// Mongoose Models
	
	var models = require('./model/models.js');
	var Chi = models.Chi(db);


	// Middleware
	function loadChi(req, res, next) {
		var t = req.params.title;
		var l = t.toLowerCase();
		Chi.findOne({name: l}, function(err, chi) {
			if (err) return;
			if (!chi) {
				chi = new Chi({name: l, title: t, date: new Date()});
				chi.save();
			}
			req.chi = chi;
			next();
		});
	}


	// Routes

	// Sample Chi page
	app.get('/:title', loadChi, function(req, res) {
		var t = req.params.title;
		res.render('sample', { title: t, ogtitle: t, url: t });
	});

	app.put('/:title/touch', loadChi, function(req, res) {
		req.chi.date = new Date();
		req.chi.save();
		res.render('ok', { layout: false });
	});

	
	// Root route
	app.get('/', function(req, res) {
		var q = Chi.find({})
		q.limit(20)
		q.desc('date')
		q.exec(function(err, chis) {
			res.render('index', { 
				title: 'Home', 
				ogtitle: 'Mikoni | Home', 
				url: '',
				chis: chis
			});
		});
	});

};
