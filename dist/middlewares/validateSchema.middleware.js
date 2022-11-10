export var validateSchema = function (schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var errors = validation.error.details.map(function (err) { return err.message; });
            res.status(422).send({
                message: "Joi patterns were not satisfied!",
                joiErrors: errors
            });
            return;
        }
        next();
    };
};
