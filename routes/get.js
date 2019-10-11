const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.get('/', async (request, response) => {
	try {
		const movies = await Movie.find({}).sort({ my_rating: -1 });
		response.json(movies);
	} catch (error) {
		response.json({ message: err });
	}
});

router.get('/:movie_title', async (req, res) => {
	Movie.find({ movie_title: req.params.movie_title }, (error, document) => {
		if (document.length) {
			console.log('Movie already exists in db');
			res.send({ doesExists: true });
		} else {
			console.log('Movie dont exists yet');
			res.send({ doesExists: false });
		}
	});
});
module.exports = router;
