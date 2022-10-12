const { productsModel } = require('../models');

const ALL_PRODUCTS = 0;

const getProducts = async () => {
  const result = await productsModel.findByProducts(ALL_PRODUCTS);
  return { type: null, message: result };
};

const getProductsId = async (id) => {
  const result = await productsModel.findByProductsId(id);
  return { type: null, message: result };
};

module.exports = {
  getProducts,
  getProductsId,
};