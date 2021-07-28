// const fetch=require("isomorphic-fetch")

// const registerUser=async(email,phone_number,password)=>{
  
//   const response= await fetch("http://localhost:8080/api/register",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({email,phone_number,password})
//     })
//     const result=await response.json()
//     console.log(result)
// }

// registerUser("email@gmail.com",08060304393,"password")




// const fetch=require("isomorphic-fetch")

// const verifypayment=async(token,email,thumbnail_id)=>{
  
//   const response= await fetch("http://localhost:8080/api/movie/myvideos",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({token,email, thumbnail_id})
//     })
//     const result=await response.json()
//     console.log(result)
// }

// fetchvideos("token","email@gmail.com","60f5f23839266a11fcf2f981")


const fetch=require("isomorphic-fetch")

const verifypayment=async(email,amount)=>{
  
  const response= await fetch("http://localhost:8080/api/admin/verifypayment",{
method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify({email, amount})
    })
    const result=await response.json()
    console.log(result)
}

verifypayment("emaile@gmail.com",2)











// const fetch=require("isomorphic-fetch")

// const addPreview=async(thumbnail_id,preview_id)=>{
  
//   const response= await fetch("http://localhost:8080/api/movie/listVideo",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({thumbnail_id,preview_id})
//     })
//     const result=await response.json()
//     console.log(result)
// }

// addPreview("email@gmail.com","password")











// const fetch=require("isomorphic-fetch")

// const fetchPreview=async(token,email,preview_id)=>{
  
//   const response= await fetch("http://localhost:8080/api/movie/buymovie",{
// method:"POST",
// headers:{"content-type":"application/json"},
// body:JSON.stringify({token,email,preview_id})
//     })
//     const result=await response.json()
//     console.log(result)
// }

// fetchPreview("token","email@gmail.com","60f58caadd54310cec0f7e98")

