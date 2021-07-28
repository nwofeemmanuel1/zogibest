const express=require("express")
const multer=require("multer")
const genToken=require("../secureapi/gentoken")
const Video=require("../model/Video")
const validatevideo=require("../validations/validatevideo")
const Router=express.Router()

const token=genToken(Math.random(17.1+32*71*3562*27285726272*382+91*57657220*828928373733*5625262*27762762727+2*774.1+111*812+1.1+0001+12*123))
console.log(token)
const storage=multer.diskStorage({
destination:(req,file,cb)=>{
cb(null,"./Videos")
},

filename:(req,file,cb)=>{
cb(null,token+file.originalname)
}

})
const uploads=multer({storage:storage})



Router.post("/", uploads.any("video"),async(req,res)=>{
    try{
    console.log(req.files)

if(req.files[0]){
const videoIsValid=validatevideo(req.body)
if(videoIsValid==true){
try{

  const newvideo=  await new Video({
     thumbnail:req.body.thumbnail_id,
     preview:req.body.preview_id,
     videoLink:`http://localhost:8080/api/mainvideos/${req.files[0].filename}`
})
const result=await newvideo.save()




res.status(200).json({error:false,message:newvideo})

}catch(err){
    res.status(400).json({error:true,errMessage:err.message})
}

}else
{
res.status(400).json({error:true,errMessage:videoIsValid})
}


}else{
    res.status(400).json({error:true,errMessage:"an error occured check internet connection and make sure video is in good shape and try again"})
}
 }catch(err){
     res.status(403).json({error:true,errMessage:err.message})
 }
})

module.exports=Router