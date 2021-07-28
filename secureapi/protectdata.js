const dotenv=require("dotenv")
dotenv.config.call()

const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    if(req.params.token){
        const token=req.params.token
    try{
const result=jwt.verify(token,process.env.SECURITYKEY)
// return result
next()
    }catch(err){
        res.json({error:true,errMessage:`${err.message} please login to access api`})
    }

    }else{
        res.status(403).json({error:true,errMessage:"this type of request is forbidden"})
    }

}

module.exports=verifyToken
