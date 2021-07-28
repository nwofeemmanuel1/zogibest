const dotenv=require("dotenv")
dotenv.config.call()


const express=require("express")
const Router=express.Router()
const jwt=require("jsonwebtoken")
// console.log("hey key"+ process.env.SECURITYKEY)
Router.post("/",(req,res)=>{
    if(req.body.token){

        try{
            const result=jwt.verify(req.body.token,process.env.SECURITYKEY)
            // return resultY
            res.status(200).json({error:false,message:"success you are logged in"})
                }catch(err){
                res.json({error:true,errMessage:`${err.message} please login to access api`,login:true})
         }

    }else{
        res.status(403).json({error:true,errMessage:"request type forbidden"})
    }
})
module.exports=Router


//"url":"mongodb+srv://playground:desolidboy1@cluster0.vnuog.mongodb.net/videoRental"
