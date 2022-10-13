const { productsModel } = require('../models');

module.exports = async (req, res, next) => {
  const sales = req.body;
  const findProduct = await Promise.all(sales.map(async (i) =>
    productsModel.findById(i.productId)));

  const verifyProducts = findProduct.some((i) => i === undefined);
  if (verifyProducts) return res.status(404).json({ message: 'Product not found' });

  next();
};