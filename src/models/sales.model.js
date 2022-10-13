const connection = require('./connection');

const newId = async () => {
  const [rows] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUE ()',
    [],
  );

  return (rows.insertId);
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
  insert,
};