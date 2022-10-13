const { salesModel } = require('../models');

const createSale = async (sales) => {
  const newSaleId = await salesModel.insert(sales);
  return { type: null, message: newSaleId };
};

module.exports = {
  createSale,
};