const mongoose=require("mongoose");

require("dotenv").config();

// Connection between ur node js application and db.
// We have wrapped it in a function dbConnect and then exported it
const dbConnect=()=> {  
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>console.log("DB connection is successful"))
    .catch((error)=> {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
    });
}

module.exports=dbConnect;