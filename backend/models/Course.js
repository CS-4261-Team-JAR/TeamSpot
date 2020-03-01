const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
	semester: {
		type: String,
		required: true,
		min: 4,
		max: 6
	},
	year: {
		type: Number,
		required: true,
		min: 2010,
		max: 9999,
	},
  subject: {
		type: String,
		required: true,
		min: 2,
		max: 4
	},
	course: {
		type: Number,
		required: true,
		min: 1000,
		max: 9999
	},
	section: {
		type: String,
		required: true,
		min: 1,
		max: 2
	},
	createdBy: {
		type: mongoose.Types.ObjectId,
		required: true
	},
	createdDate: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Course', CourseSchema);