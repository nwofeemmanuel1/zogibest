
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




const submitproof=async(screenshot,name,amount)=>{
    const email=getCookie("email")
    console.log(email)
    document.querySelector("#submit-proof").innerHTML="submitting..."
const proof =new FormData()
proof.append("screenshot",screenshot)
proof.append("name",name)
proof.append("amount",amount)
proof.append("email",email)

const response=await fetch("/api/payment/proof",{
    method:"POST",
    // headers:{"content-type":"multipart/formdata"},
    body:proof

})
console.log("sent ------.........")
const result=await response.json()
console.log(result)
if(result.error){
     document.querySelector("#errMessage").innerHTML=result.errMessage
     document.querySelector("#submit-proof").innerHTML="not submitted"
}else{
    // state.video_thumbnail=result.message
    //  document.querySelector("#submit-thumbnail").innerHTML="uploaded"
    //  document.querySelector("main").style.display="none"
    //   document.querySelector(".preview").style.display="block"



    //   console.log(state.video_thumbnail)
    alert("success")
    window.location.href="/"
}

}





document.addEventListener("DOMContentLoaded",()=>{
document.querySelector("#submit-proof").onclick=()=>{

const amount_paid=document.querySelector("#amount-paid").value
const name=document.querySelector("#name-used-to-make-payment").value
const screenshot=document.querySelector("#screenshot").files[0]

if(!amount_paid)return document.querySelector("#errMessage").innerHTML="the amount you paid is required"
if(!name)return document.querySelector("#errMessage").innerHTML="name used to make payment is required"
if(!screenshot)return document.querySelector("#errMessage").innerHTML="screenshot or evidence of payment is requiired"

document.querySelector("#errMessage").innerHTML=""
submitproof(screenshot,name,amount_paid)
}


})