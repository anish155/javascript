function Authenticate(){
const user=document.getElementById("username").value.trim().toLowerCase();
const code=document.getElementById("password").value.trim();

if (user=="anish" && code =="anish123"){
    alert("login successful");
    window.location.href="homepage.html";
    }
}