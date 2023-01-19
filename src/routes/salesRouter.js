const express = require('express');
const salesController = require('../controllers/salesController');
const { validateSales } = require('../middlewares/validateSales');

const router = express.Router();

router.post('/', validateSales, salesController.createSales);

module.exports = router;
