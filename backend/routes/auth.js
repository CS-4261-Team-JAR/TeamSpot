const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {
	registerValidation,
	loginValidation
} = require('../validation');

// Register
router.post('/register', async (req, res) => {
	const {
		error
	} = registerValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const emailExist = await User.findOne({
		email: req.body.email
	});
	if (emailExist) return res.status(400).send('Email already exists');

	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email.toLowerCase(),
		password: hashPassword
	});

	try {
		const savedUser = await user.save();
		const token = jwt.sign({
			_id: user._id
		}, process.env.TOKEN_SECRET);
		res.header('Authorization', token).send(token);
	} catch (err) {
		res.status(400).send(err);
	}
});

// Login
router.post('/login', async (req, res) => {
	const {
		error
	} = loginValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({
		email: req.body.email.toLowerCase()
	});
	if (!user) return res.status(400).send('Email or password is incorret');

	const validPass = await bcrypt.compare(req.body.password, user.password);
	if (!validPass) return res.status(400).send('Email or password is incorret');

	const token = jwt.sign({
		_id: user._id
	}, process.env.TOKEN_SECRET);
	res.header('Authorization', token).send({"token": token});
});

module.exports = router;