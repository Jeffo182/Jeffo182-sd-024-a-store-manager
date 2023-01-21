const salesModel = require('../models/salesModel');
const salesProductsModel = require('../models/salesProductsModel');
const productsModel = require('../models/productsModel');
const { schemaSales } = require('./validations/schema');
const { mapError } = require('../utils/errorMap');

const getAllIds = async (productList) => {
  const dbVerify = await Promise.all(
    productList.map(async (item) => {
      const product = await productsModel.getProductById(item.productId);
      if (!product) {
        return false;
      }
        return true;
    }),
  );
  console.log(`Resultado do DBverify ${dbVerify} fim do resultado`);
  return dbVerify;
};

const createNewProductsSale = async (productList) => {
  const { error } = schemaSales.validate(productList);
  if (error) {
    return mapError(error.message);
  }

  const exist = await getAllIds(productList);
  const go = exist.every((item) => item === true);
  console.log(go);

  if (go) {
    await salesModel.newSale();
    const newSalesProducts = await salesProductsModel.newSaleProduct(productList);
    if (newSalesProducts) return newSalesProducts;
  }
    return { status: 404, message: 'Product not found' };
};

const getAll = async () => {
  const { sales, products } = await salesProductsModel.getAll();
  const merged = products.map((element) => ({
    ...sales.find((o) => o.id === element.sale_id),
    ...element,
  }));
  console.log(merged);

  const result = merged.map((element) => ({
    saleId: element.sale_id,
    date: element.date,
    productId: element.product_id,
    quantity: element.quantity,
  }));
  return result;
};

const findById = async (id) => {
  const response = await salesProductsModel.findById(id);
  return response;
};

module.exports = {
  createNewProductsSale,
  getAll,
  findById,
};
