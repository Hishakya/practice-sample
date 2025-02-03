import Joi from "joi";

const receiverSchema = Joi.object({
  user: Joi.string().required(),
  class: Joi.string().required(),
  age: Joi.number().integer().required(),
  email: Joi.string().email().required(),
});

export default receiverSchema;
