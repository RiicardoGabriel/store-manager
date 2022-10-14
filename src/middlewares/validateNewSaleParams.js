const { salesModel } = require('../models');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const verify = await salesModel.findBySaleIdParams(id);
  if (!verify) return res.status(404).json({ message: 'Sale not found' });

  next();
};