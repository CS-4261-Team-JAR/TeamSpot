const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../models/User');

// View notification
router.get('/', verify, async (req, res) => {
	const user = await User.findOne({
		_id: req.user._id
	});

	res.send({
		notifications: user.notifications
	});
});

module.exports = router;