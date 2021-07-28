const express=require("express")
const User=require("../model/Register")
const validateRegistrationForm=require("../validations/validateRegistration")
const hashPassword=require("../secureapi/hashPassword")
const genToken=require("../secureapi/gentoken")
const Router=express.Router()

Router.post("/",async(req,res)=>{
   const isvalid=validateRegistrationForm(req.body)
if(isvalid===true){
const password=await hashPassword(req.body.password)

try{
  const userExist= await User.findOne({email:req.body.email})
  if(userExist)return res.status(403).json({error:true,errMessage:"user already exist please login"})
const user = await new User({ 
    email:req.body.email,
    phone_number:req.body.phone_number,
    purpose:req.body.purpose,
    password:password,
  balance:0
})
const result=await user.save()
const token=genToken(result._id)
res.json({error:false,message:user,token})

}catch(err){
    res.json({error:true,errMessage:err.message})
}

}else
{
    res.json({error:true,errMessage:isvalid})
}


})

module.exports=Router