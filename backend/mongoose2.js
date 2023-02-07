const mongoose = require('mongoose');

const Product = require('./models2/product');
mongoose.connect(
    'mongodb+srv://<name>:<Password>@cluster0.8a23z2l.mongodb.net/product_test?retryWrites=true&w=majority'
).then(()=>{
    console.log("connected to database");
}).catch((error)=> {
    console.log('Connection failed');
});

const createProduct = async (req, res, next) => {
    const createdProduct = new  Product({
        name : req.body.name,
        price : req.body.price
    });
    const result = await createdProduct.save();
    res.json(result);
}

const getProducts = async (req, res, next) => {
    const products = await Product.find().exec();
    res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;