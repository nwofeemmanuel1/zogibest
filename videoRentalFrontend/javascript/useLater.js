// function myFunction() {
//   var x = document.createElement("VIDEO");

//   if (x.canPlayType("video/mp4")) {
//     x.setAttribute("src","movie.mp4");
//   } else {
//     x.setAttribute("src","movie.ogg");
//   }

//   x.setAttribute("width", "320");
//   x.setAttribute("height", "240");
//   x.setAttribute("controls", "controls");
//   document.body.appendChild(x);
// }
const fetchvideos=async()=>{
    const response=await fetch("http://localhost:8080/api/listThumbnail/allthumbnail")
   const result=await response.json()
   if(result.error){
     alert(result.errMessage)
   }else{
     console.log(result.message)
   }
   
   }
   
   fetchvideos()
   
   
   const createVideo=(src,videoname,id)=>{
   
         var x = document.createElement("video");
   
     if (x.canPlayType("video/mp4")) {
       x.setAttribute("src", src);
     } else {
       x.setAttribute("src", src);
     }
   
   //   x.setAttribute("width", "320");
   //   x.setAttribute("height", "240");
     x.setAttribute("controls", "controls");
   //   document.main.appendChild(x);
   // document.querySelector(".main").appendChild(x)
   const div=document.createElement("div")
   const button=document.createElement("button")
   const b=document.createElement("p")
   b.innerHTML="haha iamaj sjjs bajnmskjs jjsjsj   margin-bottom: 20%; hahah jaikw"
   button.innerHTML="Buy Video"
   
   button.className=id
   button.onclick=()=>alert(button.className)
   div.appendChild(x)
   div.appendChild(b)
   div.appendChild(button)
   document.querySelector(".main").appendChild(div)
   
   }
   
   createVideo("../Api/Videos/populate.mp4","haha",1)
   
   // ../Api/Videos/populate.mp4