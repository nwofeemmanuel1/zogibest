const Joi=require("joi")

const validatevideo=(req)=>{
const schema=Joi.object({
    thumbnail_id:Joi.string()
    .required(),
    // preview_id:Joi.string()
    //  .required()

})

const result=schema.validate({thumbnail_id:req.thumbnail_id})
if(result.error)return result.error.message
return true

}

module.exports=validatevideo