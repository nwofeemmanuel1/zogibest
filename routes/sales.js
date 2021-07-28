const express=require("express")
const protectRoute=require("../secureapi/protectRoute")
const isvalid=require("../validations/validatesale")
const Thumbnail=require("../model/ThumbNail")
const Preview=require("../model/Preview")
const Video=require("../model/Video")
const User=require("../model/Register")
const Sale=require("../model/Sale")
const Router=express.Router()

//protectRoute
Router.post("/",protectRoute,async(req,res)=>{
const userIsValid=isvalid(req.body)
if(userIsValid===true){
    try{
  const video=await Video.findOne({preview:req.body.preview_id})
  .populate("thumbnail")
  console.log(`thumbnail id is ${video.thumbnail._id}`)
  console.log(`video price =${req.body.price}`)
  if(video){
// console.log(video)

const user=await User.findOne({email:req.body.email})
if(user){
    if(user.balance >=parseInt(req.body.price)){
        try{
            const newSale=  await new Sale({
                  buyer:req.body.email,
                thumbnail:video.thumbnail._id,
                video:video._id,
                license:req.body.license
              })

     await user.set({ balance:user.balance -parseInt(req.body.price)})

 const finaluserresult= await user.save()
 const finalsaleresult=await newSale.save()
          return   res.status(200).json({error:false,message:"success you have bought a new video go to my videos to watch your videos or wait while you are being redirected",finalsaleresult,finaluserresult})

            }catch(err){
                return res.status(400).json({error:true,errMessage:err.message})
            }

    }else{
        res.status(400).json({error:true,errMessage:"insufficient balance please wait while we redirect you to your dashboard to fund account"})
    }

}else{
    res.status(400).json({error:true,errMessage:"an error occured you login to buy videos please wait while we redirect you to login ",login:true})
}

  }else {
      
 const preview= await Preview.findById(req.body.preview_id)
if(preview){
    console.log(preview)
await Thumbnail.findByIdAndDelete(preview.thumbnail)
await Preview.findByIdAndDelete(req.body.preview_id)
res.status(400).json({error:true,errMessage:"the video you tried to buy had an error during upload and has been deleted but if you insist on buying feel free to contact webmaster"})
}else{
    res.status(400).json({error:true,errMessage:"an unexpected error occured seems you sent an invalid preview"})
}
 
  }

 }catch(err) {
        res.status(400).json({error:true,errMessage:err.message})
    }

//  try{

// const video=await Video.findOne({preview:req.body.preview_id})

// if(video){
//     console.log(`the thumnail=${video.thumbnail}`)
// const user=await User.findOne({email:req.body.email})
// if(user){
// if(user.balance >= video.thumbnail.video_price){
//     try{
// const newSale=  await new Sale({
//       buyer:req.body.email,
    
//       preview:req.body.preview_id
//   })
//   const finalsaleresult=await newSale.save()
// }catch(err){
//     return res.status(400).json({error:true,errMessage:err.message})
// }
//   await user.set({ balance:user.balance - video.thumbnail.video_price })
//  const finaluserresult= await user.save()

// res.status(200).json({error:false,message:"success you have bought a new video go to my videos to watch your videos or wait while you are being redirected",finalsaleresult,finaluserresult})
// }else{
//     res.status(400).json({error:true,errMessage:"insufficient balance please you will be redirected to your dashboard to fund account and buy videos"})
// }

// }else{
//     res.status(400).json({error:true,errMessage:"please login to access this api end point for buying"})
// }


// }else{

//  const preview= await Preview.findById(req.body.preview_id)
// if(preview){
//     console.log(preview)
// await Thumbnail.findByIdAndDelete(preview.thumbnail)
// await Preview.findByIdAndDelete(req.body.preview_id)
// res.status(400).json({error:true,errMessage:"the video you tried to buy had an error during upload and has been deleted but if you insist on buying feel free to contact webmaster"})
// }else{
//     res.status(400).json({error:true,errMessage:"an unexpected error occured seems you sent an invalid preview"})
// }

// }


//   }catch(err){
//       res.json({error:true,errMessage:err.message})
//   }



}else
{
    res.status(400).json({error:true,errMessage:userIsValid})
}
})

module.exports=Router