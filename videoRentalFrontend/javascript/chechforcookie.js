const verifyCookie=async(token)=>{
    const response=await fetch("/api/user/verifytoken",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({token})
    })
    const result=await response.json()
    console.log(result)
// if(result.error)return  window.location.href="/login.html"
}



( async(cname)=>{
   
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            
            const token= c.substring(name.length, c.length);
            try{
                const response=await fetch("/api/user/verifytoken",{
                    method:"POST",
                    headers:{"content-type":"application/json"},
                    body:JSON.stringify({token})
                })
                console.log(token)
                const result=await response.json()
                // console.log(result)
             if(result.error)return  window.location.href="/login.html"
             return true
            }catch(err){
              return document.body.innerHTML="NETWORK ERROR PLEASE REFRESH"
            }
            // return verifyCookie(token)
        }
    }
    // return "";
    window.location.href="/login.html"
  })("token")

