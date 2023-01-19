const { connection } = require('./connection');

const newSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [{ insertId }] = await connection.execute(query);

  return insertId;
};

module.exports = {
  newSale,
};
