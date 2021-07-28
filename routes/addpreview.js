const express=require("express")
const validatePreview=require("../validations/validatepreview")
const Preview=require("../model/Preview")
const Thumbnail=require("../model/ThumbNail")
const multer=require("multer")
const Joi=require("joi")
const Router=express.Router()

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./preview")
       
    },
    filename:(req,file,cb)=>{
 cb(null,Math.random(0999.9+62277822*8227627627627626+2832.2*2762373673)*Math.random(8227627627627626+2832*2762373673) + "preview")
    }

})



//remember to filter video fileFilter:FileFilter
const uploads=multer({storage:storage})

Router.post("/",uploads.any("video_preview"),async(req,res)=>{
    try{
 if(req.files[0]){

    const isvalid=validatePreview(req.body)  
if(isvalid === true){
// console.log(req.body.thumbnail_id)
    try{
     const newPreview=await new Preview({
         thumbnail:req.body.thumbnail_id,
         previewLink:`http://localhost:8080/api/seevideopreview/${req.files[0].filename}`
     })
const result=await newPreview.save()
res.status(200).json({error:false,message:result})

    }catch(err){

        res.json({error:true,errMessage:err.message})
    } 


}else{
    res.status(400).json({error:true,errMessage:isvalid})
}


    }else{
        res.status(403).json({error:true,errMessage:"an error occured check internet connection and your information and try again"})
    }



    }catch(err){
        res.status(400).json({error:true,errMessage:err.message})
    }
})



Router.post("/view",async(req,res)=>{
    const isvalid=validatePreview(req.body)  
    if(isvalid==true){

    
   try{
const preview= await Preview.findOne({thumbnail:req.body.thumbnail_id})
.populate("thumbnail")
console.log(preview)
console.log(req.body.thumbnail_id)
if(preview){
    await Thumbnail.findByIdAndDelete(req.body.thumbnail_id)
res.status(200).json({error:false,message:preview})
}else{
    res.status(404).json({error:true,errMessage:"preview was not found"})
}
   }catch(err){
res.status(400).json({error:true,errMessage:err.message})
   }

    }else{
        res.status(400).json({error:true,errMessage:isvalid})
    }
})


module.exports=Router