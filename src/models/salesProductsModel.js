const { connection } = require('./connection');

const newSaleProduct = async (productList) => {
  const [[{ count }]] = await connection.execute(
    'SELECT COUNT(distinct sale_id) as count FROM StoreManager.sales_products',
  );

  const id = Number(count + 1);

  const sale = await Promise.all(
    productList.map(async (item) => {
      await connection.execute(
        'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
        [id, item.productId, item.quantity],
      );
      return item;
    }),
  );

  return { id, itemsSold: sale };
};

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.sales';
  const qSales = 'SELECT * FROM StoreManager.sales_products';
  const [sales] = await connection.execute(query);
  const [products] = await connection.execute(qSales);
  return { sales, products };
};

const findById = async (id) => {
  const query = 'SELECT id, date FROM StoreManager.sales WHERE id = ?';
  const qSalesPartLint = 'SELECT sale_id, product_id, quantity';
  const qSales = `${qSalesPartLint} FROM StoreManager.sales_products WHERE sale_id = ?`;
  const [dateOfSales] = await connection.execute(query, [id]);
  const [productsOfSales] = await connection.execute(qSales, [id]);
  return { dateOfSales, productsOfSales };
};

const updateProduct = async (id, name) => {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const [updatedProduct] = await connection.execute(query, [name, id]);
  return updatedProduct;
};

module.exports = {
  newSaleProduct,
  getAll,
  findById,
  updateProduct,
};
