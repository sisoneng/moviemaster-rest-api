const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require('dotenv/config');
console.log(app);
// routes
const postsRouter = require('./routes/posts.js');
const getRouter = require('./routes/get.js');
const deleteRouter = require('./routes/delete.js');
// middleware
app.use(cors());
app.use(bodyParser.json()); // parse incoming request bodies in middleware before handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/posts', postsRouter);
app.use('/get', getRouter);
app.use('/delete', deleteRouter);
// connect to
mongoose
	.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(res => {
		console.log('Successfully connected to DB!');
	})
	.catch(error => {
		console.log(error);
	});

// server listen on port 3000
app.listen(process.env.PORT);
