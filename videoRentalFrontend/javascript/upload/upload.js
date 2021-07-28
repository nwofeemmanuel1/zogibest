let state={

}



const submitMainVideo=async(main_video,thumbnail_id,preview_id)=>{
     document.querySelector(".errMessage2").innerHTML=""
  document.querySelector("#submit-mainvideo").innerHTML="uploading..." 
  const video =new FormData()
video.append("main_video",main_video)
video.append("thumbnail_id",thumbnail_id)
video.append("preview_id",preview_id)
console.log("main video has been sent ")
const response=await fetch("http://localhost:8080/api/movie/listVideo",{
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
}

}




// /api/movie/listVideo

//http://localhost:8080/api/movie/listPreview
const submitPreview=async(preview,id)=>{
    document.querySelector(".errMessage1").innerHTML=""
  document.querySelector("#submit-preview").innerHTML="uploading..."   
const video =new FormData()
video.append("video_preview",preview)
video.append("thumbnail_id",id)
const response=await fetch("http://localhost:8080/api/movie/listPreview",{
    method:"POST",
    // headers:{"content-type":"multipart/formdata"},
    body:video
})

console.log("sent preview sent ")
const result=await response.json()
console.log(result)
if(result.error){
     document.querySelector(".errMessage1").innerHTML=result.errMessage
     document.querySelector("#submit-preview").innerHTML="not uploaded"
}else{
    state.video_preview=result.message
     document.querySelector("#submit-preview").innerHTML="uploaded"
     document.querySelector(".preview").style.display="none"
      document.querySelector(".video").style.display="block"



      console.log(state.video_preview)
}


}











const submitThumbnailImage=async(video_thumbnail,video_name,video_description,videopricefor1day,videopricefor1year,videopricefor3years)=>{
    document.querySelector("#submit-thumbnail").innerHTML="uploading..."
const video =new FormData()
video.append("video_thumbnail",video_thumbnail)
video.append("video_name",video_name)
video.append("video_description",video_description)
video.append("videopricefor1day",videopricefor1day)
video.append("videopricefor1year",videopricefor1year)
video.append("videopricefor3years",videopricefor3years)
const response=await fetch("http://localhost:8080/api/listThumbnail",{
    method:"POST",
    // headers:{"content-type":"multipart/formdata"},
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
      document.querySelector(".preview").style.display="block"



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
    const videopricefor1day=document.querySelector("#price1").value
    const videopricefor1year=document.querySelector("#price2").value
    const videopricefor3years=document.querySelector("#price3").value

    const video_thumbnail=document.querySelector("#video-thumbnail").files[0]
    // console.log(video_thumbnail)
    if(!video_name)return document.querySelector(".errMessage").innerHTML="Video name is required"
   if(!video_description)return document.querySelector(".errMessage").innerHTML="Please describe video"
    if(video_description.length < 21)return document.querySelector(".errMessage").innerHTML="Video description must e at least 21 characters long"

   if(!videopricefor1day)return document.querySelector(".errMessage").innerHTML="video price for one day is required"
   if(!videopricefor1year)return document.querySelector(".errMessage").innerHTML="video price for one year is required"
   if(!videopricefor3years)return document.querySelector(".errMessage").innerHTML="video price for three years is required"

   if(!video_thumbnail)return document.querySelector(".errMessage").innerHTML="Please Upload Video Thumbnail"

   
submitThumbnailImage(video_thumbnail,video_name,video_description,videopricefor1day,videopricefor1year,videopricefor3years)
   
}





document.querySelector("#submit-preview").onclick=()=>{
document.querySelector(".errMessage1").innerHTML=""
const video_preview=document.querySelector("#video-preview").files[0]
if(!video_preview)return document.querySelector(".errMessage1").innerHTML="video preview is required"

submitPreview(video_preview, state.video_thumbnail ? state.video_thumbnail._id : "")
// state.video_thumbnail._id

// 60f15ebcbbf97618b071dead
 }


document.querySelector("#submit-mainvideo").onclick=()=>{
document.querySelector(".errMessage2").innerHTML=""
const main_video=document.querySelector("#video").files[0]
if(!main_video)return document.querySelector(".errMessage2").innerHTML="the main video  is required"

submitMainVideo(main_video,state.video_thumbnail._id , state.video_preview._id )

}

})

