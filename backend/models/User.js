const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024
	},
	courses: [{
		type: mongoose.Types.ObjectId,
		ref: 'Course'
	}],
	notifications: [{
		type: String
	}],
	createdDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('User', userSchema);