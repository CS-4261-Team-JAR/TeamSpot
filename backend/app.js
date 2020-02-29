const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3000;

// Import routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');
const coursesRoute = require('./routes/courses');
const profileRoute = require('./routes/profile');

// Import environment variable
dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	() => console.log('Connected to DB!')
);

// Middlewares
app.use(bodyParser.json());
app.use(cors());
// Route Middlewares

app.use('/api/user', authRoute);
app.use('/api/user/profile', profileRoute);
app.use('/api/course', coursesRoute);
// app.use('/api/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
	res.send('TeamSpot API Home Page');
});

// listening to the server
app.listen(port, () => console.log('Listening on port: ' + port));