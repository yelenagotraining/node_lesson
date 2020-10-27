const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //null on a product constructor indicates that it is a new product and should be in create mode. 
  const product = new Product(null, title, imageUrl, description, price);
  product
  .save()
  .then(() => {
    res.redirect('/');
  })
  .catch(err => console.log(err));

  
};


//to test edit without a UI
// http://localhost:3002/admin/edit-product/12345?edit=true
exports.getEditProduct = (req, res, next) => {
  //access request query parameter
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }

  
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatePrice = req.body.price;
  const updateImageUrl = req.body.imageUrl;
  const updateDesc = req.body.description;
  const updatedProduct = new Product(prodId, updatedTitle, updateImageUrl, updateDesc, updatePrice);
  updatedProduct.save();
  return res.redirect('/admin/products');

};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products',
      hasProducts: products.length > 0
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId);
  res.redirect('/admin/products');

};