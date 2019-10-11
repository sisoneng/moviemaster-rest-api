const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');
// post a movie
router.post('/', async (request, response) => {
	const post = new Movie({
		movie_title: request.body.movie_title,
		release_year: request.body.release_year,
		my_rating: request.body.my_rating,
		poster_path: request.body.poster_path
	});
	try {
		// Movie.create({
		// 	movie_title: request.body.movie_title,
		// 	release_year: request.body.release_year,
		// 	my_rating: request.body.my_rating,
		// 	poster_path: request.body.poster_path
		// });
		await post.save();
		response.status(200).send({ message: 'Success' });
		console.log('Post Success');
	} catch (err) {
		response.status(500).send({ message: 'Already on the list' });
		console.log('Post Failed!');
	}
});

module.exports = router;

// console.log(module.exports.stack[0].route);
