const camelize = require('camelize');
const connection = require('./connection');

const findBySales = async () => {
  const [result] = await connection.execute(
    `SELECT s.date, p.*
      FROM sales s
      INNER JOIN sales_products p
      ON s.id = p.sale_id
      ORDER BY p.sale_id, p.product_id`,
);

  return camelize(result);
};

const findBySaleId = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT s.date, p.product_id, p.quantity
      FROM sales s
      INNER JOIN sales_products p
      ON s.id = p.sale_id
      WHERE s.id = (?)`,
      [saleId],
  );
  return camelize(result);
};

const findBySaleIdParams = async (saleId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM sales WHERE id = ?',
    [saleId],
  );

  return camelize(result);
};

const newId = async () => {
  const [rows] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUE ()',
    [],
  );

  return (rows.insertId);
};

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [id],
  );

  return { id };
};

const updateSale = async (id, sales) => {
  sales.map(async (i) => {
    console.log(i.productId, i.quantity, id);
    await connection.execute(
      `UPDATE StoreManager.sales_products
      SET quantity = ? WHERE product_id = ? AND sale_id = ?`,
       [i.quantity, i.productId, id],
    );
  });

  return {
    saleId: id,
    itemsUpdated: sales,
  };
};

const insert = async (sales) => {
  const id = await newId();
  sales.map(async (i) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
      [id, i.productId, i.quantity],
    );
  });

  return {
    id,
    itemsSold: sales,
  };
};

module.exports = {
  findBySales,
  newId,
  findBySaleId,
  insert,
  findBySaleIdParams,
  deleteSale,
  updateSale,
};