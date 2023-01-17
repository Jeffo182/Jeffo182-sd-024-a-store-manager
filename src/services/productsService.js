const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getProductById = async (id) => {
  const product = await productsModel.getProductById(id);
  if (!product) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, data: product };
};

module.exports = {
  getAll,
  getProductById,
};
