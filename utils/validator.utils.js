const Joi = require('@hapi/joi');

module.exports = {
    validate: function (value, schema) {
        let result = Joi.validate(value, schema).error;
        if (result != null) {
            return result.details.map(x => {
                return {
                    key: x.context.key,
                    message: x.message
                }
            });
        }
        return null;
    },
    message: function (errors) {
        return errors.map(err => {
            switch (err.type) {
                case "string.min":
                    return { message: `Este campo não pode ter menos que ${err.context.limit} caracteres.` };
                case "string.max":
                    return { message: `Este campo não pode ter mais que ${err.context.limit} caracteres.` };
                case "any.empty":
                    return { message: `Este campo é obrigatório.` };
                default:
                    return {};
            }
        });
    }
};