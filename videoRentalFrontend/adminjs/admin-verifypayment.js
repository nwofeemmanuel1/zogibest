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
  
  alert("hey")