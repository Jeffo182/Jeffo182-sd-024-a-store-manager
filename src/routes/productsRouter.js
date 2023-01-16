const express = require('express');
const productsControler = require('../controllers/productsControler');

const router = express.Router();

router.get('/', productsControler.getAll);
router.get('/:id', productsControler.getProductById);

module.exports = router;
