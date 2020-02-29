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
const registerCourseValidation = (data) => {
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

module.exports = {
	registerValidation,
	loginValidation,
	courseValidation,
	registerCourseValidation,
	profileValidation
};