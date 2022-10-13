module.exports = (req, res, next) => {
  const [{ productId, quantity }] = req.body;

  if (!productId) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (quantity <= 0) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  return next();
};
