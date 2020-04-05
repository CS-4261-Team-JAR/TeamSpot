const router = require('express').Router();
const verify = require('./verifyToken');
const Post = require('../models/Post');
const User = require('../models/User');

// Request to join
router.post('/join', verify, async (req, res) => {
	const post = await Post.findOne({
		_id: req.body.postId
	});

	try {
		if (!post.requests.includes(req.user._id)) {
			post.requests.push(req.user._id)
		}
		await post.save()
		res.send({
			requests: post.requests
		});
	} catch (err) {
		res.status(400).send(err);
	};
});

// Accept request
router.post('/accept', verify, async (req, res) => {
	const post = await Post.findOne({
		_id: req.body.postId
	});

	const requestor = req.body.requestor;
	try {
		const index = post.requests.indexOf(requestor);
		if (index > -1) {
			post.requests.splice(index, 1);
		}
		
		const requestorInfo = await User.findOne({
			_id: requestor
		});

		post.members.push(requestorInfo.name);
		await post.save();

		requestorInfo.notifications.push("Congratulations! Your team joining request has been approved.")
		await requestorInfo.save()

		res.send({
			members: post.members
		});
	} catch (err) {
		res.status(400).send(err);
	};
});

// Reject request
router.post('/reject', verify, async (req, res) => {
	const post = await Post.findOne({
		_id: req.body.postId
	});

	const requestor = req.body.requestor;
	try {
		const index = post.requests.indexOf(requestor);
		if (index > -1) {
			post.requests.splice(index, 1);
		}
		
		await post.save();

		const requestorInfo = await User.findOne({
			_id: requestor
		});
		requestorInfo.notifications.push("Sorry. Your team joining request was rejected.")
		await requestorInfo.save()

		res.send({
			requests: post.requests
		});
	} catch (err) {
		res.status(400).send(err);
	};
});

module.exports = router;