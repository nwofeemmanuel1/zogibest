

function setCookie(email, token) {
  // alert("called")
    const d = new Date();
    d.setTime(d.getTime() + 24*60*60*1000);
    let expires = "expires="+ d.toUTCString();
    document.cookie=`email=${email} ; ${expires}`
    document.cookie = `token=${token} ; ${expires}`;
    window.location.href="/dashboard.html"
  } 



const loginUser=async(email,password)=>{
  
  const response= await fetch("/api/login",{
method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify({email,password})
    })
    const result=await response.json()
    console.log(result)
    if(result.error)return document.querySelector(".errMessage").innerHTML=result.errMessage
     return setCookie(result.user.email,result.token)
}

//response gotten

// loginUser("email@gmail.com","password")

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
          return c.substring(name.length, c.length);
      }
  }
  return "";
}




document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#login").onclick=()=>{
      
    const email=document.querySelector("#email")
    const password=document.querySelector("#password")
    if(!email.value)return document.querySelector(".errMessage").innerHTML="Email is required"
    if(!password.value)return document.querySelector(".errMessage").innerHTML="Password is required"
    if(password.value.length < 8)return document.querySelector(".errMessage").innerHTML="Password must be greater than 8 characters"

    document.querySelector(".errMessage").innerHTML=""

    loginUser(email.value,password.value)
    }
})