import { NextFunction, Request, Response } from "express";
import Joi, { ObjectSchema } from "joi";

export const validateSchema = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      const errors = validation.error.details.map((err: Joi.ValidationErrorItem) => err);
      res.status(422).send({
        message: "Joi patterns were not satisfied!",
        joiErrors: errors,
      });
      return;
    }
    next();
  };
};
