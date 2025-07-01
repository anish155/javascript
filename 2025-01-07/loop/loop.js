function Numbers(){
    let output="";
    for(let i=1;i<=10;i++){
        output+=i+"<br>";
    }
    document.getElementById("root").innerHTML=output;
}