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

const registerUser=async(phone,email,firstName,lastName,password,confirmPassword)=>{
const response=await fetch("http://localhost:3000/signup",{
method:"POST",
headers:{"content-type":"application/json"},
body:JSON.stringify({
 phone,email,firstName,lastName,password,confirmPassword
})
})
const result=await response.json()
return result

}