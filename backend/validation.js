const Joi = require('@hapi/joi');

// Register Validation
const registerValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string()
			.min(6)
			.required(),
		email: Joi.string()
			.min(6)
			.required()
			.email(),
		password: Joi.string()
			.min(6)
			.required()
	});

	return schema.validate(data);
};

// Login Validation
const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string()
			.min(6)
			.required()
			.email(),
		password: Joi.string()
			.min(6)
			.required()
	});

	return schema.validate(data);
};

// Course Validation
const courseValidation = (data) => {
	const schema = Joi.object({
		year: Joi.number()
			.min(2010)
			.max(9999)
			.required(),
		semester: Joi.string()
			.min(4)
			.max(6)
			.required(),
		subject: Joi.string()
			.min(2)
			.max(4)
			.required(),
		course: Joi.number()
			.min(1000)
			.max(9999)
			.required(),
		section: Joi.string()
			.min(1)
			.max(2)
			.required()
	});

	return schema.validate(data);
};

// Register course Validation
const courseIdValidation = (data) => {
	const schema = Joi.object({
		course: Joi.string()
			.min(24)
			.max(24)
			.required()
	});

	return schema.validate(data);
};

// Profile Validation
const profileValidation = (data) => {
	const schema = Joi.object({
		major: Joi.string()
			.required(),
		standing: Joi.string()
			.required(),
		intro: Joi.string()
			.required(),
		skills: {
			technical: Joi.array().items(Joi.string()).required(),
			soft: Joi.array().items(Joi.string()).required()
		},
		tags: Joi.array().items(Joi.string()),
		classTaken: Joi.array().items(Joi.string()),
		linkedin: Joi.string()
			.uri()
			.optional(),
		github: Joi.string()
			.uri()
			.optional()
	});

	return schema.validate(data);
};

// Post Validation
const postValidation = (data) => {
	const schema = Joi.object({
		course: Joi.string()
			.required(),
		title: Joi.string()
			.min(10)
			.max(56)
			.required(),
		description: Joi.string()
			.min(10)
			.max(512)
			.required(),
		tags: Joi.array().items(Joi.string()),
		members: Joi.array().items(Joi.string()).required(),
		total: Joi.number()
			.required(),
	});

	return schema.validate(data);
};

// Update post Validation
const postUpdateValidation = (data) => {
	const schema = Joi.object({
		id: Joi.string()
			.required(),
		title: Joi.string()
			.min(10)
			.max(56)
			.required(),
		description: Joi.string()
			.min(10)
			.max(512)
			.required(),
		tags: Joi.array().items(Joi.string()),
		members: Joi.array().items(Joi.string()).required(),
		total: Joi.number()
			.required(),
	});

	return schema.validate(data);
};

// Discussion Validation
const discussionValidation = (data) => {
	const schema = Joi.object({
		postId: Joi.string()
			.min(24)
			.max(24)
			.required(),
		message: Joi.string()
			.min(1)
			.required(),
	});

	return schema.validate(data);
};

module.exports = {
	registerValidation,
	loginValidation,
	courseValidation,
	courseIdValidation,
	profileValidation,
	postValidation,
	postUpdateValidation,
	discussionValidation
};