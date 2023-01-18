const express = require('express');
const productsControler = require('../controllers/productsControler');
const validate = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', productsControler.getAll);
router.get('/:id', productsControler.getProductById);
router.post('/', validate.validateProduct, productsControler.createProduct);

module.exports = router;
