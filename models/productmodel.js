const mongoose = require('mongoose');
const Productmodels= new mongoose.Schema(
    {
    name:{
        type :  String,
        required:[true,'Enter your name']
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    
  }
);

const Product=mongoose.model('Product',Productmodels);
module.exports=Product;

// module.exports = mongoos.model("Product", ProductSchema);