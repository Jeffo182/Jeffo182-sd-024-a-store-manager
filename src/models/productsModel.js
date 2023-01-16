const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
};

const getProductById = async (req) => {
  const { id } = req.params;
  const query = `SELECT id, name FROM StoreManager.products WHERE id = ${id}`;
  const product = await connection.execute(query);
  return product;
};

module.exports = {
  getAll,
  getProductById,
};
