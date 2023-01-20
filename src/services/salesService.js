const salesModel = require('../models/salesModel');
const salesProductsModel = require('../models/salesProductsModel');
const productsModel = require('../models/productsModel');
const { schemaSales } = require('./validations/schema');
const { mapError } = require('../utils/errorMap');

const getAllIds = async (productList) => {
  const dbVerify = await Promise.all(
    productList.map(async (item) => {
      const product = await productsModel.getProductById(item.productId);
      if (product.length === 0) return false;
      return true;
    }),
  );

  return dbVerify;
};

const createNewProductsSale = async (productList) => {
  const { error } = schemaSales.validate(productList);
  if (error) {
    return mapError(error.message);
  }

  const exist = await getAllIds(productList);
  const go = exist.every((item) => item === true);

  if (go) {
    await salesModel.newSale();
    const newSalesProducts = await salesProductsModel.newSaleProduct(productList);
    if (newSalesProducts) return newSalesProducts;
  }
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  createNewProductsSale,
};
