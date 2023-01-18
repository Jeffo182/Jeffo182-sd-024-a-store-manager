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
  try {
      const { name } = req.body;
      const newProduct = await productsService.createProduct({ name });
      res.status(201).json(newProduct);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
};
