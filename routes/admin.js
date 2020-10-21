const path = require('path');
const express = require('express');

const router = express.Router();

//const rootDir = require('../util/path');
const adminController = require('../controllers/admin');
const { render } = require('pug');



// GET Request
router.get('/add-product', adminController.getAddProduct);
router.get('/products',adminController.getProducts);

// POST Request
router.post('/add-product',adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);
router.post('/delete-product', adminController.postDeleteProduct);


module.exports = router;
