const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js');

router.delete('/:movie_title', async (req, res) => {
	try {
		console.log(req.params.movie_title);
		await Movie.deleteOne({ movie_title: req.params.movie_title }, function(
			err,
			docs
		) {
			if (docs.deletedCount) {
				res.send({ delete_message: 'Deleted Successfully' });
			}
		});
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
