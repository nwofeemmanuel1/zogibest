const Joi=require("joi")

const validatethumbnail=(req)=>{

const schema=Joi.object({
video_name:Joi.string()
.required(),
video_description:Joi.string()
.required()
.min(20),
// videopricefor1day:Joi.number()
// .required()
// .min(0),
// videopricefor1year:Joi.number()
// .required()
// .min(0),
// videopricefor3years:Joi.string()
// .required()
// .min(0)
})

const result=schema.validate(
    {video_name:req.video_name,
    video_description:req.video_description,
    // videopricefor1day:req.videopricefor1day,
    // videopricefor1year:req.videopricefor1year,
    // videopricefor3years:req.videopricefor3years
}
    )
if(result.error)return result.error.message
return true
}

// const result=validatethumbnail({video_name:"empty",video_description:"description must be at least 20 characters",video_price:20})
// console.log(result)
module.exports=validatethumbnail

