
const fetchuploadproof=async()=>{
    const response=await fetch("http://localhost:8080/api/payment/proof/list")
   const result=await response.json()
   if(result.error){
     alert(result.errMessage)
     return null
   }else{
    return result.message.forEach(element => {
      console.log(element)
     createthumbnail(element.screenshot,element.name,element.amount,element._id)
    });
  
   }
   
   }
   fetchuploadproof()
   
   
   const createthumbnail=(src,videoname,amount,id)=>{
     const span=document.createElement("span")
     const image=document.createElement("img")
   const p=document.createElement("p")
   const b=document.createElement("b")
   const hr=document.createElement("hr")
   image.src=src
   image.alt="image"
   image.style.width="100%"
   image.style.height="75%"
   p.innerHTML=`Payment Name:${videoname}`
   b.innerHTML=`Amount specified:#${amount}`
   span.onclick=()=>window.location.href=`/api/payment/proof/${id}`
   span.appendChild(image)
   span.appendChild(p)
   span.appendChild(hr)
   span.appendChild(b)

   console.log(document.querySelector("main").appendChild(span))
   }
   
   
   
   