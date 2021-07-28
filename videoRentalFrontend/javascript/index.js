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
(fetchvideos=async()=>{
 const response=await fetch("http://localhost:8080/api/listThumbnail/allthumbnail")
const result=await response.json()
if(result.error){
  // alert(result.errMessage)
  return null
}else{
 return result.message.forEach(element => {
  //  console.log(element)
  createthumbnail(element.imageLink,element.video_name,element._id)
 });

}

})()



const createthumbnail=(src,videoname,id)=>{
  const span=document.createElement("span")
  const image=document.createElement("img")
const p=document.createElement("p")
image.src=src
image.alt="image"
image.style.width="100%"
image.style.height="75%"
p.innerHTML=videoname
span.onclick=()=>window.location.href=`/preview/${id}`
span.appendChild(image)
span.appendChild(p)
document.querySelector("main").appendChild(span)
}



