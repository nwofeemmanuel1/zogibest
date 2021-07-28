const Joi=require("joi")

const validatesale=(req)=>{
const schema=Joi.object({
    email:Joi.string()
    .email()
    .required(),
    preview_id:Joi.string()
    .required(),
    license:Joi.string()
    .required(),
    price:Joi.number()
    .required()
})

const result=schema.validate({email:req.email,preview_id:req.preview_id,license:req.license,price:req.price})
if(result.error)return result.error.message
return true
}

module.exports=validatesale