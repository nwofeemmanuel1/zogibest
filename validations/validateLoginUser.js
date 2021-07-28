const Joi=require("joi")
const validateLoginUser=(req)=>{
const schema=Joi.object({
   email:Joi.string() 
   .email()
   .required(),

   password:Joi.string()
   .required()
   .min(8)
   
})

const result=schema.validate({email:req.email,password:req.password})
if(result.error)return result.error.message
return true
}

module.exports=validateLoginUser