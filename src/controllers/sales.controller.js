const { salesService } = require('../services');

const openSales = async (_req, res) => {
  const { type, message, error } = await salesService.getSales();

  if (type) return res.status(error).json(message);

  res.status(200).json(message);
};

const openSaleId = async (req, res) => {
  const { id } = req.params;
  const { message, code, error } = await salesService.getSaleId(id);
  if (error) res.status(code).json({ message: error });

  res.status(200).json(message);
};

const createSale = async (req, res) => {
  const sales = req.body;
  
  const { code, message, error } = await salesService.createSale(sales);

  if (error) return res.status(code).json(message);

  res.status(201).json(message);
};

module.exports = {
  openSales,
  openSaleId,
  createSale,
};