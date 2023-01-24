const productsModel = require('../models/productsModel');
const { mapError } = require('../utils/errorMap');
const { schemaName } = require('./validations/schema');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, message: product };
};

const createProduct = async ({ name }) => {
  const { error } = schemaName.validate(name);
  if (error) {
    return mapError(error.message);
  }
  const id = await productsModel.createProduct({ name });
  return { id, name };
};

const updateProduct = async ({ id, name }) => {
  const response = await productsModel.updateProduct({ id, name });
  return response;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
};
