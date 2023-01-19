const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  const saleArray = req.body;
  const { type, message } = await salesService.createNewProductsSale(saleArray);

  if (type) return res.status(404).json({ message });

  return res.status(201).json(message);
};

module.exports = {
  createSales,
};
