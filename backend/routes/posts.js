const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
	res.send(req.user);
});

module.exports = router;
// const express = require('express');
// const router = express.Router();
// const Post = require('../models/Post');

// router.get('/', async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.json(posts);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.get('/:postId', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.postId);
//     res.json(post)
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// router.post('/', async (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     description: req.body.description,
//     tags: req.body.tags,
//     author: req.body.author,
//     status: {
//       remaining: req.body.status.remaining,
//       total: req.body.status.total
//     }
//   });

//   try {
//     const savedPost = await post.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// module.exports = router;