const router = require('express').Router();
const verify = require('./verifyToken');
const Profile = require('../models/Profile');
const {
	profileValidation,
} = require('../validation');

// Get Profile
router.get('/', verify, async (req, res) => {
	const profileExist = await Profile.findOne({
		user: req.user._id
	}, '-_id -__v').populate('user', 'name');
	if (!profileExist) return res.status(400).send({'error': 'Profile not found'});

	res.send(profileExist);
});

// Get Profile
router.get('/:id', verify, async (req, res) => {
	const profileExist = await Profile.findOne({
		user: req.params.id
	}, '-_id -__v').populate('user', 'name email')
	if (!profileExist) return res.status(400).send({'error': 'Profile not found'});

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
	if (profileExist) return res.status(400).send({'error': 'Profile already exists'});

	const profile = new Profile({
		user: req.user._id,
		major: req.body.major,
		standing: req.body.standing,
		intro: req.body.intro,
		skills: {
			technical: req.body.skills.technical,
			soft: req.body.skills.soft,
		},
		tags: req.body.tags,
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
	const profile = await Profile.findOne({
		user: req.user._id
	});

	profile.major = req.body.major;
	profile.standing = req.body.standing;
	profile.intro = req.body.intro;
	profile.skills.technical = req.body.skills.technical;
	profile.skills.soft = req.body.skills.soft;
	profile.skills.tags = req.body.skills.tags;
	profile.classTaken = req.body.classTaken;
	profile.linkedin = req.body.linkedin;
	profile.github = req.body.github;
	profile.lastModified = Date.now();

	try {
		await profile.save()
		res.send(profile);
	} catch (err) {
		res.status(400).send(err);
	};
});

module.exports = router;