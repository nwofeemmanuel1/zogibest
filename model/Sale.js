const mongoose=require("mongoose")
const config=require("config")
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to preview database"))
.catch(err=>console.log(err.message))
const saleSchema=new mongoose.Schema({
buyer:{
   type:String,
   required:true
},
expiryDate:{
    type:Date,
    default:Date.now()
},
thumbnail:{
type:mongoose.Schema.Types.ObjectId,
ref:"thumbnail",
required:true
},
video:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"video",
    required:true
},
license:{
    type:String,
    required:true
}


})

const Sale=mongoose.model("sale",saleSchema)
module.exports=Sale