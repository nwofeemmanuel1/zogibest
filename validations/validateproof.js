const Joi=require("joi")

const validateproof=(req)=>{
const schema=Joi.object({
    amount_you_paid:Joi.number()
    .required().min(0),
    name_used_to_make_payment:Joi.string()
    .required(),
    email:Joi.string()
    .email()
    .required()
})

const result=schema.validate({amount_you_paid:req.amount,name_used_to_make_payment:req.name,email:req.email})
if(result.error)return result.error.message
return true
}
module.exports=validateproof