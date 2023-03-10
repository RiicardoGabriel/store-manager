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

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { type, message } = await productsService.putProduct(id, name);
  if (type) res.status(404).json(message);

  res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await productsService.delProduct(id);
  if (type) res.status(404).json(message);

  res.status(204).json(message);
};

const searcProduct = async (req, res) => {
  const name = req.query.q;

  const { type, message } = await productsService.searchProduct(name);
  if (type) res.status(404).json(message);

  res.status(200).json(message);
};

module.exports = {
  openProducts,
  openProductsId,
  createProduct,
  updateProduct,
  deleteProduct,
  searcProduct,
};