let state={

}



const submitMainVideo=async(main_video,thumbnail_id)=>{
     document.querySelector(".errMessage2").innerHTML=""
  document.querySelector("#submit-mainvideo").innerHTML="uploading..." 
  const video =new FormData()
video.append("main_video",main_video)
video.append("thumbnail_id",thumbnail_id)
// video.append("preview_id",preview_id)
console.log("main video has been sent ")
const response=await fetch("/api/admin/freevideo",{
    method:"POST",
    // headers:{"content-type":"multipart/formdata"},
    body:video
})


const result=await response.json()
console.log(result)
if(result.error){
     document.querySelector(".errMessage2").innerHTML=result.errMessage
     document.querySelector("#submit-mainvideo").innerHTML="not uploaded"
}else{
    alert("success")
    console.log(result.message)
    document.querySelector("#submit-mainvideo").innerHTML="uploaded"
    
}

}




const submitThumbnailImage=async(video_thumbnail,video_name,video_description,video_price)=>{
    document.querySelector("#submit-thumbnail").innerHTML="uploading..."
const video =new FormData()
video.append("video_thumbnail",video_thumbnail)
video.append("video_name",video_name)
video.append("video_description",video_description)
// video.append("video_price",video_price)
const response=await fetch("/api/admin/freethumbnail",{
    method:"POST",
    body:video
})
console.log("sent ------.........")
const result=await response.json()
console.log(result)
if(result.error){
     document.querySelector(".errMessage").innerHTML=result.errMessage
     document.querySelector("#submit-thumbnail").innerHTML="not uploaded"
}else{
    state.video_thumbnail=result.message
     document.querySelector("#submit-thumbnail").innerHTML="uploaded"
     document.querySelector("main").style.display="none"
     document.querySelector(".video").style.display="block"



      console.log(state.video_thumbnail)
}

}

document.addEventListener("DOMContentLoaded",()=>{
document.querySelector("#submit-thumbnail").onclick=()=>{
// document.querySelector("main").style.display="none"
//       document.querySelector(".preview").style.display="block"


    document.querySelector(".errMessage").innerHTML=""
    const video_name =document.querySelector("#video-name").value
    const video_description=document.querySelector("#video-description").value
    const video_thumbnail=document.querySelector("#video-thumbnail").files[0]
    // console.log(video_thumbnail)
    if(!video_name)return document.querySelector(".errMessage").innerHTML="Video name is required"
   if(!video_description)return document.querySelector(".errMessage").innerHTML="Please describe video"
    if(video_description.length < 21)return document.querySelector(".errMessage").innerHTML="Video description must e at least 21 characters long"
   if(!video_thumbnail)return document.querySelector(".errMessage").innerHTML="Please Upload Video Thumbnail"
submitThumbnailImage(video_thumbnail,video_name,video_description)
   
}







document.querySelector("#submit-mainvideo").onclick=()=>{
document.querySelector(".errMessage2").innerHTML=""
const main_video=document.querySelector("#video").files[0]
if(!main_video)return document.querySelector(".errMessage2").innerHTML="the main video  is required"

submitMainVideo(main_video,state.video_thumbnail._id )

}

})

