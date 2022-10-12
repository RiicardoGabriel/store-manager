const { error } = require('shelljs');
const { productsService } = require('../services');

const openProducts = async (_req, res) => {
  const { type, message } = await productsService.getProducts();

  if (type) return res.status(error).json(message);

  res.status(200).json(message);
};

const openProductsId = async (req, res) => {
  const { id } = req.params;
  const { message } = await productsService.getProductsId(id);

  if (message === undefined) res.status(404).json({ message: 'Product not found' });

  res.status(200).json(message);
};

const createProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productsService.createProduct(name);

  if (type) res.status(404).json(message);

  res.status(201).json(message);
};

module.exports = {
  openProducts,
  openProductsId,
  createProduct,
};