const camelize = require('camelize');
const snakeize = require('snakeize');
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

const findById = async (productId) => {
  const [[products]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );

  return camelize(products);
};

const insert = async (product) => {
  const columns = Object.keys(snakeize(product))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(product)
    .map((_key) => '?')
    .join(', ');

    const [{ insertId }] = await connection.execute(
      `INSERT INTO products (${columns}) VALUE (${placeholders})`,
      [...Object.values(product)],
    );
  
  return insertId;
};

module.exports = {
  findByProducts,
  findByProductsId,
  findById,
  insert,
};