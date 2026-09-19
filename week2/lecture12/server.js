const express=require("express");
const productroutes = require('./routes/productroutes.js')
const app=express();

const PORT = 3000

app.use(express.json()) //parses json data == middleware h ye

app.use('/api/products',productroutes)

app.listen(PORT,()=>console.log("the server is running"));