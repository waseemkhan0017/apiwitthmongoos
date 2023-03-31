var express = require('express');
var router = express.Router();//import express router
const Product=require('../models/productmodel');//importing the model
const mongoos=require('mongoose');
mongoos.connect('mongodb+srv://crudapi:waseem123@atlascluster.dl2kzoz.mongodb.net/crudapi?retryWrites=true&w=majority')
.then(()=>console.log('connected to mongodb'))
.catch(err=>console.log('could not connect to mongodb',err))


/*
router.post('/',async(req,res)=>{
    try{
          const product=await Product.create(req.body);
          res.status(200).json(product); 
        }catch(err){
            res.status(err).json({message:err.message});
        }
    });
    */
   router.use(express.json());//to parse the json data
   
   router.post('/',async(req,res)=>{
    router.post('/post', async(req, res) => {
        const data = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
            age: req.body.age
        })
        try{
            const product=await Product.create(data);
            res.status(200).json(product);
        }catch(err){
            res.status(err).json({message:err.message});
        }
    })
});//to create a new product
router.get('/',async(res,req)=>{
  try{
      const product=await Product.find({});
      res.status(200).json(product);

  }catch(err){  
        res.status(err).json({message:err.message});
     
  }
})

module.exports = router;
