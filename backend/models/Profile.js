const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	major: {
		type: String,
		required: true
	},
	standing: {
		type: String,
		required: true
	},
	intro: {
		type: String,
		required: true
	},
	skills: {
		technical: [String],
		soft: [String]
	},
	classTaken: [String],
	linkedin: String,
	github: String,
	lastModified: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Profile', profileSchema);