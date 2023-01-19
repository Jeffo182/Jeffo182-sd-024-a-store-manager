const salesModel = require('../models/salesModel');
const salesProductsModel = require('../models/salesProductsModel');
const productsModel = require('../models/productsModel');

// const createSales = async (salesArray) => {
//   const newSales = salesArray.map((sale) => salesModel.createSales(sale));
//   return newSales;
// };

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
  await salesModel.newSale();

  const exist = await getAllIds(productList);
  const go = exist.every((item) => item === true);

  if (go) {
    const newSalesProducts = await salesProductsModel.newSaleProduct(productList);
    if (newSalesProducts) return { type: null, message: newSalesProducts };
  }
  return { type: 'NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  // createSales,
  createNewProductsSale,
};
