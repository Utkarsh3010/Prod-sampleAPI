const Product=require('../models/product');
const getAllProducts=async(req,res)=>{
    const {company,name,sort,select} = req.query;
    const queryObject={};
    if(company){
        queryObject.company=company;
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"}; //regex used for case sensetive i and I both will be considerd as same
    } 
    let apiData=Product.find(queryObject);
    if(sort){
        let sortFix=sort.replace(","," ");
        apiData=apiData.sort(sortFix);
    }
    if(select){
        let selectFix=select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit) || 10;
    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit);

    const Products=await apiData;
    res.status(200).json({Products});
};
const getAllProductstesting=async(req,res)=>{
    const mydata=await Product.find(req.query);
    res.status(200).json({mydata});
};
module.exports={getAllProducts,getAllProductstesting};