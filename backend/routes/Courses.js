const router = require('express').Router();
const verify = require('./verifyToken');
const Course = require('../models/Course');
const User = require('../models/User');
const {
	courseValidation,
	registerCourseValidation
} = require('../validation');

router.get('/', verify, async (req, res) => {
	const user = await User.findOne({
		_id: req.user._id
	}).populate('courses', '_id semester year subject course section');

	res.send(user.courses);
})

router.get('/:year/:semester/:subject/:course/:section', verify, async (req, res) => {
	const {
		error
	} = courseValidation(req.params);
	if (error) return res.status(400).send(error.details[0].message);

	const courseExist = await Course.findOne({
		year: req.params.year,
		semester: req.params.semester,
		subject: req.params.subject,
		course: req.params.course,
		section: req.params.section
	});

	if (courseExist) {
		return res.send({
			course: courseExist._id
		});
	}

	const course = new Course({
		semester: req.params.semester,
		year: req.params.year,
		subject: req.params.subject,
		course: req.params.course,
		section: req.params.section,
		createdBy: req.user._id
	});

	try {
		await course.save();
		res.send({
			course: course._id
		});
	} catch (err) {
		res.status(400).send(err);
	};
});

router.post('/register', verify, async (req, res) => {
	const {
		error
	} = registerCourseValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({
		_id: req.user._id
	});
	const courseExist = user.courses.includes(req.body.course);
	if (courseExist) return res.send({
		user: user._id
	});

	user.courses.push(req.body.course);
	try {
		await user.save();
		res.send({
			user: user._id
		});
	} catch (err) {
		res.status(400).send(err);
	};
});

module.exports = router;