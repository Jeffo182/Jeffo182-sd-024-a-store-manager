const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  const saleArray = req.body;
  const response = await salesService.createNewProductsSale(saleArray);
  console.log(response);

  if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(201).json(response);
};

const getAll = async (_req, res) => {
  const products = await salesService.getAll();
  res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const response = await salesService.findById(id);

  if (response.status) {
    return res.status(response.status).json({ message: response.message });
  }
  return res.status(200).json(response);
};

const updateProduct = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const response = await salesService.updateProduct(id, name);
  return res.status(200).json(response);
};

module.exports = {
  createSales,
  getAll,
  findById,
  updateProduct,
};
