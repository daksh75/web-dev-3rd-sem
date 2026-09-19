const products = require('../data/data.js')
const express = require('express')
const router = express.Router()
const productcontoller = require('../controller/productsController.js')



router.get("/",(req,res)=>{
    res.json(products);
})

router.get("//:id",(req,res)=>{
    const id=req.params.id;
    console.log(id);
    
    const result=products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"product not found"})
    }
    res.json({success:true,result})
})


router.post("/",(req,res)=>{
    const product=req.body;
    products.push({id:products.length+1,...product});
    res.json({success:true,product});
})


router.put("//:id",(req,res)=>{
    const id=req.params.id;
    const product=req.body;
    
    const result=products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"product not found"})
    }
    result.name=product.name;
    result.category=product.category;
    result.price=product.price;
    res.json({success:true,result});
})



router.delete("//:id",(req,res)=>{
    const id=req.params.id;
    
    
    const result=products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"product not found"})
    }
    const index=products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,result});
})

module.exports=router