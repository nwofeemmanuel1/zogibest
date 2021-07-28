const dotenv=require("dotenv")
dotenv.config.call()

const jwt=require("jsonwebtoken")

const genToken=(userId)=>{
  const token=  jwt.sign({userId},process.env.SECURITYKEY)
  return token
}

module.exports=genToken




