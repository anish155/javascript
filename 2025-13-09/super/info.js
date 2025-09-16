function Verify(){
    const name="Anish";
    const pass="anish123";

    let input_name=document.getElementById("username").value.trim();
    let input_pass=document.getElementById("password").value.trim();

    if (input_name==name && input_pass==pass){
        alert("Beta Login Successful! WELCOME ADMIN");
        window.location.href = "market-home.html";
    }
    else{
        alert("Unauthorized Access.");
    }
}

window.onload = function() {
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.classList.add("stars");
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(star);
    }
};