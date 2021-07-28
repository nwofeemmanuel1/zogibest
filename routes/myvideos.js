const express=require("express")
const Sale=require("../model/Sale")
const protectRoute=require("../secureapi/protectRoute")
const isvalid=require("../validations/validatemyvideos")
const Joi=require("joi")
const Router=express.Router()

const validateEmail=(req)=>{
    const schema=Joi.object({
        email:Joi.string()
        .email()
        .required()
    })
    const result=schema.validate({email:req.email})
if(result.error)return result.error.message
return true
}
//protectRoute,

Router.post("/all",protectRoute,async(req,res)=>{
const emailIsValid= validateEmail(req.body)
if(emailIsValid ==true){
    try{
const allmyvideos=await Sale.find({buyer:req.body.email})
.populate("thumbnail")
if(!allmyvideos[0])return res.status(404).json({error:true,errMessage:"please you have not bought any video at the moment"})
res.json({error:false,remembertocheckreturn:true,message:allmyvideos})

    }catch(err){
        res.status(400).json({error:true,errMessage:err.message})
    }

}else{
    res.status(400).json({error:true,errMessage:emailIsValid})
}


})



//protectRoute
Router.post("/",protectRoute,async(req,res)=>{
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
  



 res.json({error:false,message:myvideo})
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
