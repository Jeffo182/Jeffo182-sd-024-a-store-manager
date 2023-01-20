const salesService = require('../services/salesService');

const createSales = async (req, res) => {
  const saleArray = req.body;
  const response = await salesService.createNewProductsSale(saleArray);
  console.log(response);

  if (response.status) return res.status(response.status).json({ message: response.message });
    return res.status(201).json(response);
};

module.exports = {
  createSales,
};
