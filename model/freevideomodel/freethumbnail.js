const mongoose=require("mongoose")
const config=require("config")
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to thumbnail database"))
.catch(err=>console.log(err.message))

const freeVideothumbNailSchema=new mongoose.Schema({
    imageLink:{
        type:String,
        required:true
    },
   video_name:{
type:String,
required:true
    },
   video_description:{
        type:String,
        required:true
    },

})
const Freethumbnail=mongoose.model("freethumbnail",freeVideothumbNailSchema)
module.exports=Freethumbnail
