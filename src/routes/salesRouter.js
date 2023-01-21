const express = require('express');
const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/', salesController.getAll);
router.get('/:id', salesController.findById);
router.post('/', salesController.createSales);

module.exports = router;
