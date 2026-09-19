const express = require('express')
const app = express();
const PORT = 4000;
app.use(express.json())
const products = [{
    id:1,
    name:"hp pavellion",
    category:"laptop",
    price:"50000"
},
{
    id:2,
    name:"iphone 17promax",
    category:"phone",
    price:"50000"
},
{
    id:3,
    name:"ipad",
    category:"tablet",
    price:"50000"
},{
    id:4,
    name:"zebronics",
    category:"mouse",
    price:"50000"
}]
app.get("/api/products",(req,res)=>{
    res.json(products)
})

app.get("/api/products/:id",(req,res)=>{
    const id = req.params.id
    const result = products.find((product)=>product.id==id)
    if(result ==undefined){
        res.status(404).json(
            {
                success:false,
                message:"product not found"
            }
        )
    }
    res.json({success:true,result})
})


//create

app.post("/api/products",(req,res)=>{
    const product = req.body;
    products.push(product)
    res.json({success:true,product})
})


app.listen(PORT,()=>{console.log("server is running on port",PORT);})
