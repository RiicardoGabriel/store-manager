const express = require('express');
const productsController = require('../controllers/products.controller');

const validateNewProduct = require('../middlewares/validateNewProduct');
const validateIdProductForParams = require('../middlewares/validateIdProductsForParams');

const router = express.Router();

router.get('/', productsController.openProducts);
router.get('/:id', productsController.openProductsId);
router.post('/', validateNewProduct, productsController.createProduct);
router.put('/:id',
  validateNewProduct,
  validateIdProductForParams,
  productsController.updateProduct);
router.delete('/:id', validateIdProductForParams, productsController.deleteProduct);

module.exports = router;