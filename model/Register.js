const mongoose=require("mongoose")
const config=require("config")
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to user database"))
.catch(err=>console.log(err.message))

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
       unique:true
    },
    phone_number:{
        type:String,
        required:true,
        minLength:0
    },
    purpose:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    balance:Number



})

const User=mongoose.model("user",userSchema)
module.exports=User

// "mongoose"