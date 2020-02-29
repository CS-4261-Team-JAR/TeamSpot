const router = require('express').Router();
const verify = require('./verifyToken');
const Profile = require('../models/Profile');
const {
	profileValidation,
} = require('../validation');

// Get Profile
router.get('/', verify, async (req, res) => {
	const {
		error
	} = profileValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const profileExist = await Profile.findOne({
		user: req.user._id
	}, '-_id -__v');
	if (!profileExist) return res.status(400).send('Profile not found');

	res.send(profileExist);
});

// Create profile
router.post('/', verify, async (req, res) => {
	const {
		error
	} = profileValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const profileExist = await Profile.findOne({
		user: req.user._id
	});
	if (profileExist) return res.status(400).send('Profile already exists');

	const profile = new Profile({
		user: req.user._id,
		major: req.body.major,
		standing: req.body.standing,
		intro: req.body.intro,
		skills: {
			technical: req.body.skills.technical,
			soft: req.body.skills.soft,
		},
		classTaken: req.body.classTaken,
		linkedin: req.body.linkedin,
		github: req.body.github
	});

	try {
		await profile.save()
		res.send('Profile created');
	} catch (err) {
		res.status(400).send(err);
	};
});

// Update profile
router.put('/', verify, async (req, res) => {
	const {
		error
	} = profileValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	const profileExist = await Profile.findOne({
		user: req.user._id
	});

	profileExist.major = req.body.major;
	profileExist.standing = req.body.standing;
	profileExist.intro = req.body.intro;
	profileExist.skills.technical = req.body.skills.technical;
	profileExist.skills.soft = req.body.skills.soft;
	profileExist.classTaken = req.body.classTaken;
	profileExist.linkedin = req.body.linkedin;
	profileExist.github = req.body.github;

	try {
		await profileExist.save()
		res.send('Updated successfully');
	} catch (err) {
		res.status(400).send(err);
	};
});

module.exports = router;