 const express = require('express')
 const router = express.Router()
 const Product = require('../models/productModel')

 router.get('/products',async(req,res)=>{
    try{
        const product = await Product.find()
        res.status(200).send({data:products})
    }
    catch(err){
        res.send(400).send({error:err})
    }
 })
 module.exports=router