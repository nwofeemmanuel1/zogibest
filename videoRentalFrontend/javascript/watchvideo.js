let state={}
const getParam=()=>{
    const params = new URLSearchParams(window.location.search)
for (const param of params) {
  return param[0]
}
}


function myFunction(src) {
    var x = document.createElement("VIDEO");
  
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src",src);
    } else {
      x.setAttribute("src",src);
    }
  
    x.setAttribute("width", "320");
    x.setAttribute("height", "240");
    x.setAttribute("controls", "controls");
  //   document.body.appendChild(x);
 document.querySelector(".video-wrapper").appendChild(x)
  }


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


( async()=>{
    const token=getCookie("token")
  const email=getCookie("email")
if(!token || !email)return window.location.href="/login.html"
const thumbnail_id=getParam()
    const response= await fetch("/api/movie/myvideos",{
  method:"POST",
  headers:{"content-type":"application/json"},
  body:JSON.stringify({token,email, thumbnail_id})
      })
      const result=await response.json()
      console.log(result)
     if(result.error)return alert(err.message)
      myFunction(result.message.video.videoLink)
      document.querySelector("b").innerHTML=result.message.thumbnail.video_name
      document.querySelector(".desc").innerHTML=result.message.thumbnail.video_description
      document.querySelector(".price").innerHTML=`VIDEO LICENSE: ${result.message.license}`

  })()
  



