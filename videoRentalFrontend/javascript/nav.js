const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

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

document.addEventListener("DOMContentLoaded",()=>{
   const email= getCookie("email")
  const token=  getCookie("token")
  const failer=getCookie("feller")
  if(email && token){
      //first of all try to verify that token here
      document.querySelector(".login-button").style.display="none"
      document.querySelector(".join-button").style.display="none"
      document.querySelector("#useremail").innerHTML=email
      document.querySelector("#myvideos").innerHTML="My videos"
      
  }else{
    document.querySelector(".login-button").style.display="block"
    document.querySelector(".join-button").style.display="block"
    document.querySelector("#useremail").innerHTML="Account"
   
    document.querySelector("#myvideos").style.display="none"
  }
 
 


})


  