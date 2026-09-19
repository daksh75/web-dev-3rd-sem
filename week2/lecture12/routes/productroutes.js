const express = require('express');
const router = express.Router();
const productController = require('../Controller/productController.js')

router.get("/search",productController.searchproducts)
router.get("/",productController.getProduct)

router.get("/:id",productController.getProductsById)

router.post("/",productController.addProducts)


router.put("/:id",productController.updateProducts)



router.delete("/:id",productController.deleteProducts)

module.exports=router