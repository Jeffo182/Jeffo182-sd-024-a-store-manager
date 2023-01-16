const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const product = await productsService.getProductById();
  res.status(201).json(product);
};

module.exports = {
  getAll,
  getProductById,
};
