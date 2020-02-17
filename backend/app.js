const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
	res.send('Home Page');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
	{useNewUrlParser: true, useUnifiedTopology: true}, 
	() => console.log('Connected to DB!')
);

// listening to the server
app.listen(3000);