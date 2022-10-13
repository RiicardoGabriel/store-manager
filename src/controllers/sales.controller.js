const { salesService } = require('../services');
// const { productsModel } = require('../models');

const createSale = async (req, res) => {
  const sales = req.body;
  
  const { code, message, error } = await salesService.createSale(sales);

  if (error) return res.status(code).json(message);

  res.status(201).json(message);
};

module.exports = {
  createSale,
};