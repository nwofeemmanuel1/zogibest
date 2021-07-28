const bcrypt=require("bcrypt")

const hashPassword=async(password)=>{
const salt= await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)
return hashedPassword
}
module.exports=hashPassword






// const consoleans=async()=>{
// const result=await hashPassword("password")
// console.log(result)
// }

// const consoleans=async(password)=>{

//     const result=await bcrypt.compare(password, "$2b$10$pBqQ7DIRUKnQboZFQM5M.ue/qQIlQkUXZxplw3008OE9VqIaecHYK")
//   console.log(result)
// }
