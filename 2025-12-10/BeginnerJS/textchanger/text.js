function Changer(){
    const text=document.getElementById("text-box");
    const input=text.value.trim();
    
    if (input===""){
        text.placeholder="No Input Given";
    }
    else{
        alert("so your idea is "+input);
    }
    input.value = "";
}