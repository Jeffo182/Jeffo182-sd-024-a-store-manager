const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message, data: [product] } = await productsService.getProductById(id);

  if (type) return res.status(type).json(message);
  res.status(200).json(product);
};

module.exports = {
  getAll,
  getProductById,
};
