const validateSales = (req, res, next) => {
  const salesArray = req.body;
  salesArray.map((item) => {
    if (!item.productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    if (!item.quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
    if (item.quantity <= 0) {
      return res.status(400).json({ message: '"quantity" must be greater than or equal to 1' });
    }
    return item;
  });
  next();
};

module.exports = {
  validateSales,
};
