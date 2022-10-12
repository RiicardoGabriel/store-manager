const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findByProducts = async (productsAll) => {
  const [result] = await connection.execute(
    'SELECT * FROM products WHERE id > ?',
    [productsAll],
  );

  return camelize(result);
};

const findByProductsId = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );

  return camelize(result);
};

module.exports = {
  findByProducts,
  findByProductsId,
};