const mongoose=require("mongoose")
const config=require("config")
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})

const proofSchema=new mongoose.Schema({

    amount:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true,  
    },
    screenshot:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }

})

const Proof=mongoose.model("proof",proofSchema)
module.exports=Proof