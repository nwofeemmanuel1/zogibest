const Joi=require("joi")

const validatesale=(req)=>{
const schema=Joi.object({
    email:Joi.string()
    .email()
    .required(),
    thumbnail_id:Joi.string()
    .required()
})

const result=schema.validate({email:req.email,thumbnail_id:req.thumbnail_id})
if(result.error)return result.error.message
return true
}

module.exports=validatesale