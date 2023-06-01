import Joi from "joi";
const updateUserValidation = Joi.object({
  firstname: Joi.string().max(30).min(2).optional(),
  lastname: Joi.string().max(30).min(2).optional(),
  password: Joi.string()
    .regex(/^(?=.*[A-Z])(?=.*\d).{6,}$/)
    .optional(),
});

export { updateUserValidation };
