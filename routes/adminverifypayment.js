const express=require("express")
const Router=express.Router()
const isvalid=require("../validations/validateadminverify")
const User=require("../model/Register")

Router.post("/",async(req,res)=>{
   const allisvalid=isvalid(req.body)
    if(allisvalid===true){
const user=await User.findOne({email:req.body.email})
if(user){
    try{
user.set({
balance:user.balance += parseInt(req.body.amount)
})
const result=await user.save()
res.status(200).json({error:false,message:result})
    }catch(err){
        res.status(400).json({error:true,errMessage:err.message})
    }
}else{
    res.status(403).json({error:true,errMessage:"oops the user no longer exist please go through th database to monitor failure or call developer immediately"})
}
res.json({message:user})
    }else{
        res.status(400).json({error:true,errMessage:allisvalid})
    }

})
module.exports=Router