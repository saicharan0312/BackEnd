const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://<name>:<Password>@cluster0.8a23z2l.mongodb.net/product_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
    console.log(req.body);
    const newProduct = {
        name : req.body.name,
        price : req.body.price
    };
    const client = new MongoClient(url);
    try {
        await client.connect();
        const db = client.db();
        const result = await db.collection('products').insertOne(newProduct);
    } catch (error) {
        return res.json({ message : "could not connect to the server" });
    };
    client.close();
    res.json(newProduct);
};

const getProducts = async (req, res, next) => {
    const client = new MongoClient(url);
    let data;
    try {
        await client.connect();
        const db = client.db();
        data = await db.collection('products').find().toArray();
    } catch(error) {
        return res.json({message : "cannot get data"});
    }
    client.close();
    res.json(data);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;