const express=require("express")
const Router=express.Router()
const User=require("../model/Register")
const  validateUser=require("../validations/validateLoginUser")
const comparePassword=require("../secureapi/comparePassword")
const genToken=require("../secureapi/gentoken")
const protectRoute=require("../secureapi/protectRoute")
Router.post("/",async(req,res)=>{
const userIsvalid=validateUser(req.body)
if(userIsvalid ===true){
try{
const user=await User.findOne({email:req.body.email})
if(user){
const passwordmatch= await comparePassword(req.body.password,user.password)
const token=genToken(user._id)
// .select("email")
if(passwordmatch)return res.json({error:false,
    user:{email:user.email,phone_nmber:user.phone_number,balance:user.balance},
token})

return res.json({error:true,errMessage:"invalid username or password"})

}else{
    return res.status(400).json({error:true,errMessage:"invalid username or password"})
}

}catch(err){
    return res.status(400).json({error:true,errMessage:err.message})
}



}else
{  res.status(400).json({error:true,errMessage:userIsvalid})
}




})


Router.post("/getuser",protectRoute,async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email})
        if(user){

            res. status(200).json({error:false,
                user:{email:user.email,phone_nmber:user.phone_number,balance:user.balance}})

        }else{
     res.status(400).json({error:true,errMessage:" sorry an unexpected error occured"})
        }
    }catch(err){
        res.status(400).json({error:true,errMessage:err.message})
    }
})
module.exports=Router