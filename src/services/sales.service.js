const { salesModel } = require('../models');

const getSales = async () => {
  const result = await salesModel.findBySales();
  return { type: null, message: result };
};

const getSaleId = async (id) => {
  console.log(id);
  const result = await salesModel.findBySaleId(id);
  if (!result.length) return { code: 404, error: 'Sale not found' };
  return { type: null, message: result };
};

const createSale = async (sales) => {
  const newSaleId = await salesModel.insert(sales);
  return { type: null, message: newSaleId };
};

module.exports = {
  getSales,
  getSaleId,
  createSale,
};