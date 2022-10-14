const { productsModel } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  
  const verify = await productsModel.findByProductsId(id);
  if (!verify) return res.status(404).json({ message: 'Product not found' });

  next();
};