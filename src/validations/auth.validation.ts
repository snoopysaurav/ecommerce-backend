import Joi from "joi";

const signupValidation = Joi.object({
  firstname: Joi.string().max(30).min(2),
  lastname: Joi.string().max(30).min(2),
  email: Joi.string().email(),
  username: Joi.string().max(30).min(2),
  password: Joi.string().regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/),
  role: Joi.string().optional(),
});

const signinValidation = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/),
});

export { signupValidation, signinValidation };
