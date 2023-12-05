const express = require('express');
const { getProductlist, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/productlist', getProductlist)

router.post('/createproduct', createProduct)


module.exports = router;