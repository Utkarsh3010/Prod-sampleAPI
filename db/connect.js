const mongoose = require('mongoose');

const connectDB=(uri)=>{
    console.log("db connnected");
    return mongoose.connect(uri,{
        useNewUrlparser:true,
        useUnifiedTopology:true,
    });
};

module.exports=connectDB;