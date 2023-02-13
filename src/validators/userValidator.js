import Joi from "joi";

const userValidator = Joi.object({
    name:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20'
    }),
    username:Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20'
    }),
    email:Joi.string().required(),
    phone:Joi.string().min(10).max(12).required()
})

export {
    userValidator
}