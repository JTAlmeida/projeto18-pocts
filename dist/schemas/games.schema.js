import Joi from "joi";
export var gamesSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    isOnSale: Joi.boolean().required(),
    saleUntil: Joi.date().when("isOnSale", {
        is: true,
        then: Joi.required(),
        otherwise: Joi.forbidden()
    })
});
