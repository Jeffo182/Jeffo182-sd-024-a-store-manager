const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
};

const getProductById = async (id) => {
  const query = 'SELECT id, name FROM StoreManager.products WHERE id = ?';
  const [[product]] = await connection.execute(query, [id]);
  return product;
};

const createProduct = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [newProduct] = await connection.execute(query, [name]);
  return newProduct.insertId;
};

const updateProduct = async ({ id, name }) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const [{ affectedRows }] = await connection.execute(query, [name, id]);
  return { affectedRows, id, name };
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProduct,
};
