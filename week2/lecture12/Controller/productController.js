const products = require('../data/data.js');
const data = require('../data/data.js')

const getProduct = (req,res)=>{
    res.json(products);
}

const getProductsById = (req,res)=>{
    const id=req.params.id;
    console.log(id);
    
    const result=products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"product not found"})
    }
    res.json({success:true,result})
}

const addProducts = (req,res)=>{
    const product=req.body;
    products.push({id:products.length+1,...product});
    res.json({success:true,product});
}

const updateProducts = (req,res)=>{
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
}

const deleteProducts = (req,res)=>{
    const id=req.params.id;
    
    
    const result=products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"product not found"})
    }
    const index=products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,result});
}
 
const searchproducts=(res,req)=>{
    const {name,category,price}=req.query;
    console.log(name,category,price);

    let result;
    if(name){
        result = products.filter((product)=>product.name===name)
    }
    if(category){
        result = products.filter((product)=>product.category===category)
    }
    if(price){
        result = products.filter((product)=>product.price===Number(price))
    }
    res.json({total:result.length,result})
}
module.exports = {deleteProducts,addProducts,getProduct,getProductsById,updateProducts,searchproducts}