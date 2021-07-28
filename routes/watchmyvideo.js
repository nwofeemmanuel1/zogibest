const express=require("express")
const Router=express.Router()
const protectRoute=require("../secureapi/protectRoute")

Router.post("/:token:thumbnail",protectRoute,async(req,res)=>{
    const dataIsOk=isvalid(req.body)
    if(dataIsOk === true){
        try{
    const myvideo=await Sale.findOne({buyer:req.body.email,thumbnail:req.body.thumbnail_id})
    .populate("thumbnail")
    .populate("video")
    if(myvideo){
    
        // console.log(req.params.id)
        // res.render('index.ejs', {
        //       title: 'HaHa',
        //   nav: ['Home','About','Contact'], 
        //   // time:Date.now(),
        //   videoprice:preview.thumbnail.video_price,
        //   videoname:preview.thumbnail.video_name,
        //   videodescription:preview.thumbnail.video_description,
        //   videoSource:preview.previewLink,
          
        //   preview_id:preview._id
        // });
      
    
    
    
    // res.json({error:false,message:myvideo})
    }else{
        res.status(403).json({error:true,errMessage:"invalid access please the video you search for no longer exist "})
    }
        }catch(err){
            res.json({error:true,errMessage:err.message})
        }
    
    }else{
      res.status(400).json({error:true,errMessage:dataIsOk}) 
    }
    
    })
    
    module.exports=Router
    