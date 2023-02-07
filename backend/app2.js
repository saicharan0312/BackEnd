const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo2'); 
const mongoosePractice = require('./mongoose2');

const app2 = express();

app2.use(bodyParser.json());

{
/* using mongoDB */
// app2.post('/products', mongoPractice.createProduct);
// app2.get('/products', mongoPractice.getProducts);
}

{
/*using mongoose */
app2.post('/products', mongoosePractice.createProduct);
app2.get('/products', mongoosePractice.getProducts);
}



app2.listen(3000);