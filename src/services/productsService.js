const productsModel = require('../models/productsModel');

const getAll = async () => {
  const products = await productsModel.getAll();
  return products;
};

const getProductById = async () => {
  const product = await productsModel.getProductById();
  return product;
};

module.exports = {
  getAll,
  getProductById,
};
