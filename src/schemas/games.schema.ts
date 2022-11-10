import Joi from "joi";

export const gamesSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    isOnSale: Joi.boolean().required(),
    saleUntil: Joi.date().when("isOnSale", {
        is: true,
        then: Joi.required(),
        otherwise: Joi.forbidden()
    }),
})