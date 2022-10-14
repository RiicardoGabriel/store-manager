const { salesModel } = require('../models');

const getSales = async () => {
  const result = await salesModel.findBySales();
  return { type: null, message: result };
};

const getSaleId = async (id) => {
  const result = await salesModel.findBySaleId(id);
  if (!result.length) return { code: 404, error: 'Sale not found' };
  return { type: null, message: result };
};

const createSale = async (sales) => {
  const newSaleId = await salesModel.insert(sales);
  return { type: null, message: newSaleId };
};

const deleteSale = async (id) => {
  const saleDelete = await salesModel.deleteSale(id);
  return { type: null, message: saleDelete };
};

const upSale = async (id, sales) => {
  const saleUp = await salesModel.updateSale(id, sales);
  return { type: null, message: saleUp };
};

module.exports = {
  getSales,
  getSaleId,
  createSale,
  deleteSale,
  upSale,
};