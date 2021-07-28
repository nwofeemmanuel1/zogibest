


    
 

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

//     const result=getCookie("email")
// console.log(result)
    const registerUser=async(phone,email,firstName,lastName,password,confirmPassword)=>{
const response=await fetch("http://localhost:3000/signup",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
     phone,email,firstName,lastName,password,confirmPassword
    })
})
const result=await response.json()
return result

}



const buyVideo=async(token,email,preview_id,license,price)=>{
    document.querySelector("#buy_video").innerHTML="proccessing"
    const response= await fetch("/api/movie/buymovie",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({token,email,preview_id,license,price})
      })
      const result=await response.json()
      console.log(result)
      if(result.error){
          if(result.login){
            document.querySelector("#buy_video").innerHTML=" try again"
            document .querySelector(".errMessage").innerHTML=result.errMessage
            setTimeout(()=>window.location.href=`/login.html`,3000)
          }else{
        document.querySelector("#buy_video").innerHTML="try again"
          document .querySelector(".errMessage").innerHTML=result.errMessage
          setTimeout(()=>window.location.href=`/dashboard.html`,2500)
         }
          //remember to redirect to fund account
      }else{
        document.querySelector("#buy_video").innerHTML="success"
        document .querySelector(".success").innerHTML=result.message
        setTimeout(()=>window.location.href=`/myvideos.html`,2500)
      }
    //   return result
  }



document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#buy_video").onclick=()=>{
        document .querySelector(".errMessage").innerHTML=""
        document .querySelector(".success").innerHTML=""
    
        const token=getCookie("token")
        const email=getCookie("email")
        console.log(email,token)
        const preview_id=document.querySelector(".preview_id").innerHTML
        const price=document.querySelector("select").value
        if(!price)return document .querySelector(".errMessage").innerHTML="please choose the price with licence of video you want to buy"
        const license=price
        const mainprice=price.substr(0,price.indexOf(' '))
        if(!token || !email)return window.location.href="/login.html"
         // alert("please you need to either login or register so you can buy videos")
        
     //document .querySelector(".errMessage").innerHTML="please you need to login or register to buy videos"
         buyVideo(token,email,preview_id,license,mainprice)
    }
  

})

