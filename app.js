require('dotenv').config();
const express = require('express');
const connectDB=require('./db/connect');
const app=express();
const products_routes=require('./routets/products')
const PORT=process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send("Hello");
});

//middleware or to set routes

app.use('/api/products',products_routes);

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log("server Running!!");
        })
    }
    catch(error){
        console.log(error);
    }
}
start();