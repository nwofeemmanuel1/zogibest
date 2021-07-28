const Joi=require("joi")
const validateadminverifypayment=(req)=>{
const schema=Joi.object({
    amount:Joi.number()
    .required()
    .min(0),
    email:Joi.string()
    .required()
    .email()
})
const result=schema.validate({amount:req.amount,email:req.email})
if(result.error)return result.error.message
return true
}
module.exports=validateadminverifypayment