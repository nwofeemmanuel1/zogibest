const mongoose=require("mongoose")
const config=require("config")
console.log(config.get("connection.url"))
mongoose.connect(config.get("connection.url"),{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connected to user database"))
.catch(err=>console.log(err.message))


const videoSchema=new mongoose.Schema({
    freethumbnail:{
type:mongoose.Schema.Types.ObjectId,
ref:"freethumbnail",
required:true
    },

    videoLink:{
        type:String,
        required:true
    }

})
const Video=mongoose.model("freevideo",videoSchema)
module.exports=Video