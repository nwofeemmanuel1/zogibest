

( (cname)=>{
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    // return "";
    window.location.href="/login.html"
  })("token")
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log(c.substring(name.length, c.length))
            return c.substring(name.length, c.length);
        }
    }
    // return "";
    window.location.href="/login.html"
  }
  getCookie("email")
  




  const getuser=async(token,email)=>{
    
    const response= await fetch("/api/login/getuser",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({token,email})
      })
      const result=await response.json()
      if(result.error)return 
       document.querySelector(".balance").innerHTML=`Available balance :#${result.user.balance}`
       document.querySelector(".email").innerHTML=result.user.email
       //   console.log(result)
  }

  document.addEventListener("DOMContentLoaded",()=>{
   const token= getCookie("token")
   const email=getCookie("email")
   getuser(token,email)


  })