const mongoose = require('mongoose');
// const schema = mongoose.Schema;
const MovieSchema = mongoose.Schema({
	movie_title: {
		type: String,
		require: true,
		unique: true
	},
	release_year: {
		type: String,
		require: true
	},
	my_rating: {
		type: Number,
		require: true
	},
	poster_path: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model('Movie', MovieSchema);
