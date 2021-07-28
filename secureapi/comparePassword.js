const bcrypt=require("bcrypt")
const comparePassword=async(password,realPassword)=>{
const result=await bcrypt.compare(password,realPassword)
return result
}
module.exports=comparePassword

// const caller=async()=>{
// const result=await comparePassword("password","$2b$10$08jwNtcYiR7ltHx4DiInkOh1J3X8UtQZYgos0IB2UBrlpcrlQpCku")
// console.log(result)
// }

// caller()

