const mongoose=require("mongoose")
const config=require("config")
console.log(config.get("connection.url"))
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to user database"))
.catch(err=>console.log(err.message))

// const Thumbnail=require("./ThumbNail")
// const Preview=require("./Preview")

const videoSchema=new mongoose.Schema({
    thumbnail:{
type:mongoose.Schema.Types.ObjectId,
ref:"thumbnail",
required:true
    },
    preview:{
type:mongoose.Schema.Types.ObjectId,
ref:"preview",
required:true
    },

    videoLink:{
        type:String,
        required:true
    }

})
const Video=mongoose.model("video",videoSchema)
module.exports=Video