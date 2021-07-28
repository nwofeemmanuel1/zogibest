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
const token=getCookie("token")
const email=getCookie("email")
// console.log(token)
// console.log(token)
const fetchvideos=async(token,email)=>{
    const response=await fetch("/api/movie/myvideos/all",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({token,email})
    })
   const result=await response.json()
   if(result.error){
   document.querySelector(".errMessage").innerHTML=result.errMessage
     return null
   }else{
       console.log(result)
       
    return result.message.forEach(element => {
      console.log(element)
     createthumbnail(element.thumbnail.imageLink,element.thumbnail.video_name,element.thumbnail._id)
    });

   }
   
   }
   fetchvideos(token,email)
   
   
   const createthumbnail=(src,videoname,id)=>{
     const span=document.createElement("span")
     const image=document.createElement("img")
   const p=document.createElement("p")
   image.src=src
   image.alt="image"
   image.style.width="100%"
   image.style.height="75%"
   p.innerHTML=videoname
   span.onclick=()=>window.location.href=`/watchvideo.html?${id}`
   span.appendChild(image)
   span.appendChild(p)
   console.log(document.querySelector("main").appendChild(span))
   }
   
   
   
   