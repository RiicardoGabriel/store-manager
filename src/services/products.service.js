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

const createProduct = async (name) => {
  const newProductId = await productsModel.insert({ name });
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

module.exports = {
  getProducts,
  getProductsId,
  createProduct,
};