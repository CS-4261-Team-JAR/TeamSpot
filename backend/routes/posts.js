const router = require('express').Router();
const verify = require('./verifyToken');
const Post = require('../models/Post');
const {
	postValidation,
	postUpdateValidation,
	discussionValidation
} = require('../validation');

// Get all posts or a post
router.get('/', verify, async (req, res) => {
	if (req.query.course) {
		const posts = await Post.find({
			course: req.query.course
		}, '-discussion -__v').populate('author', 'name -_id');

		return res.send(posts);
	}

	if (req.query.id) {
		const post = await Post.find({
				_id: req.query.id
			}, '-__v')
			.populate('author', 'name _id')
			.populate({
				path: 'discussion.user',
				model: 'User',
				select: 'name _id'
			});

		return res.send(post);
	}

	res.status(400).send('Bad request');
});

// Create post
router.post('/', verify, async (req, res) => {
	const {
		error
	} = postValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const post = new Post({
		course: req.body.course,
		title: req.body.title,
		description: req.body.description,
		author: req.user._id,
		tags: req.body.tags,
		members: req.body.members,
		total: req.body.total,
	});

	try {
		await post.save()
		res.send({
			post: post._id
		});
	} catch (err) {
		res.status(400).send(err);
	};
});

// Update post
router.put('/', verify, async (req, res) => {
	const {
		error
	} = postUpdateValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const post = await Post.findOne({
		_id: req.body.id
	});
	if (!post) res.status(400).send('Post not found');

	post.title = req.body.title;
	post.description = req.body.description;
	post.author = req.user._id;
	post.tags = req.body.tags;
	post.members = req.body.members;
	post.total = req.body.total;

	try {
		await post.save()
		res.send(post);
	} catch (err) {
		res.status(400).send(err);
	};
});

// Post dicussion
router.post('/discussion', verify, async (req, res) => {
	const {
		error
	} = discussionValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const post = await Post.findOne({
		_id: req.body.postId
	})
	if (!post) res.status(400).send('Post not found');

	post.discussion.push({
		message: req.body.message,
		user: req.user._id
	});

	try {
		await post.save()
		res.send(post);
	} catch (err) {
		res.status(400).send(err);
	};
});

// Delete post
router.delete('/:id', verify, async (req, res) => {
	await Post.deleteOne({
		_id: req.params.id
	});

	return res.send('Post deleted');
});

module.exports = router;