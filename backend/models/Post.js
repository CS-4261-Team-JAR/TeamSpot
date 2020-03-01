const mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
	message: {
		type: String,
		min: 1,
		required: true
	},
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	}
}, {
	_id: false
});

const PostSchema = mongoose.Schema({
	course: {
		type: mongoose.Types.ObjectId,
		ref: 'Course',
		required: true
	},
	title: {
		type: String,
		required: true,
		min: 10,
		max: 56
	},
	description: {
		type: String,
		required: true,
		min: 10,
		max: 512
	},
	author: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	tags: [String],
	members: [{
		type: String,
		required: true
	}],
	total: {
		type: Number,
		required: true
	},
	discussion: [{
		type: MessageSchema
	}],
	lastModified: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Posts', PostSchema);