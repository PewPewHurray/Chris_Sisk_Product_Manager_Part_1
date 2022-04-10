const Product = require("../models/product.model");

const findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => { res.json(allProducts)})
        .catch(err => res.json(err));
}

const createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}

module.exports = {
    findAllProducts,
    createProduct
}