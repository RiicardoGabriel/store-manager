const express = require('express');
const salesController = require('../controllers/sales.controller');
const validateIdProduct = require('../middlewares/validateIdProduct');
const validateNewSaleParams = require('../middlewares/validateNewSaleParams');

const validateNewSale = require('../middlewares/validateNewSale');

const router = express.Router();

router.post('/',
  validateNewSale,
  validateIdProduct,
  salesController.createSale);

router.get('/', salesController.openSales);
router.get('/:id', salesController.openSaleId);
router.delete('/:id', validateNewSaleParams, salesController.deleteSale);
router.put('/:id',
  validateNewSaleParams,
  validateNewSale,
  validateIdProduct,
  salesController.updateSale);

module.exports = router;