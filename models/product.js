const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be Provided"],
    },
    price:{
        type:Number,
        required:[true,"Price must be Given"],
    },
    featured:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{   //only specific data or comapny can be given
            values:["apple","Samsung","dell","mi","OnePlus","RealME","G-Shock"],
            message:`{VALUE} is not supported`,
        },
    },
});

module.exports=mongoose.model("Products",productSchema);