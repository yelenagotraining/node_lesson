const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/',shopController.getIndex);
    //res.sendFile(path.join(__dirname,'..','views','shop.html'));
    // res.send('<h1>Hello From Express</h1>');
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/cart-delete-item', shopController.postCartDeleteProduct);
//router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);


module.exports = router;
