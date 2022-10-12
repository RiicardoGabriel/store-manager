const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.openProducts);
router.get('/:id', productsController.openProductsId);

module.exports = router;