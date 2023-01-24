const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);

  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;
  const response = await productsService.createProduct({ name });

  if (response.status) {
    return res.status(response.status).json({ message: response.message });
  }

  return res.status(201).json(response);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const response = await productsService.updateProduct({ id, name });
  return res.status(200).json(response);
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
};
