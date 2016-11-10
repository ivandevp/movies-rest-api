var express = require('express');
var router = express.Router();
var models = require('../app/models');

router.get('/', function(req, res) {
	res.send('Holaa');
});

router.get('/movies', function(req, res) {
	models.Movie.findAll().then(function(movies) {
		res.json(movies);
	});
});

router.post('/movies', function(req, res) {
	models.Movie.create({
		title: req.body.title,
		year: req.body.year,
		genre: req.body.genre,
		director: req.body.director
	}).then(function(movie) {
		res.json(movie);
	});
});

router.put('/movie/:id', function(req, res) {
	models.Movie.find({
		where: {
			id: req.params.id
		}
	}).then(function(movie) {
		movie.updateAttributes({
			title: req.body.title,
			year: req.body.year,
			genre: req.body.genre,
			director: req.body.director
		}).then(function(movie) {
			res.json(movie);
		});
	});
});

module.exports = router;