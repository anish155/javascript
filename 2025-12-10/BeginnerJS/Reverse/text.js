function Reverse(){
    const word=document.getElementById("word").value.trim();
    let reversed="";
    for (let i=word.length-1;i>=0;i--){
        reversed+=word[i];
    }
    document.getElementById("answer").value=reversed;
}