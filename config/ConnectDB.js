const mongoose = require('mongoose');
const url=process.env.MONGO_URL;

const DbConnection=async()=>{
    try{
       const connect=await mongoose.connect(url);
       console.log("Database connected");
    }catch(error){
        console.log(error);
        process.exit();
    }
}
module.exports=DbConnection;