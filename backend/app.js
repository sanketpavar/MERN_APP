const express=require('express');
const app= express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

require('dotenv/config');

const api=process.env.API_URL;

app.get(`${api}/products`,(req,res)=>{
    const product = {
        id :1,
        name : 'hair dresser',
        image : 'random_image',
    }
    res.send(product);
})

app.post(`${api}/products`,(req,res)=>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})

//have the connection to database before starting the server
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'eshop-database'
})
.then(()=>{
    console.log('Database Connection is Ready...');
})
.catch((err)=>{
    console.log(err);
})


app.listen(3000,()=>{
    
 console.log('Running on the port number 3000');  
})