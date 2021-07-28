const mongoose=require("mongoose")
const config=require("config")
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to thumbnail database"))
.catch(err=>console.log(err.message))

const thumbNailSchema=new mongoose.Schema({
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
   videopricefor1day:{
      type:Number,
      required:true
    },
    videopricefor1year:{
        type:Number,
        required:true
      },
      videopricefor3years:{
        type:Number,
        required:true
      }
})
const Thumbnail=mongoose.model("thumbnail",thumbNailSchema)
module.exports=Thumbnail
