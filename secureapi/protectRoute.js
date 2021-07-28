const dotenv=require("dotenv")
dotenv.config.call()


const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    if(req.body.token){
    try{
const result=jwt.verify(req.body.token,process.env.SECURITYKEY)
// return result
next()
    }catch(err){
    res.json({error:true,errMessage:`${err.message} please login to access api`,login:true})
    }

    }else{
        res.status(403).json({error:true,errMessage:" request type forbidden",login:true})
    }

}

module.exports=verifyToken
