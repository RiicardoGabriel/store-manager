const express = require('express');
const salesController = require('../controllers/sales.controller');
const validateIdProduct = require('../middlewares/validateIdProduct');

const validateNewSale = require('../middlewares/validateNewSale');

const router = express.Router();

router.post('/',
  validateNewSale,
  validateIdProduct,
  salesController.createSale);

router.get('/', salesController.openSales);
router.get('/:id', salesController.openSaleId);

module.exports = router;