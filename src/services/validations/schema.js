const Joi = require('joi');

const schemaName = Joi.string()
  .trim()
  .min(5)
  .required()
  .label('name')
  .messages({
    'any.min': '{{#label}} length must be at least 5 characters long',
  });

  const addSalesProductSchema = Joi.object({
    productId: Joi.number()
      .min(1)
      .positive()
      .integer()
      .required()
      .label('productId'),
    quantity: Joi.number()
      .min(1)
      .positive()
      .integer()
      .required()
      .label('quantity'),
  }).messages({
    'any.min': '{{#label}} must be greater than or equal to {{#limit}}',
  });

const schemaSales = Joi.array().items(addSalesProductSchema);

module.exports = {
  schemaName,
  schemaSales,
};
