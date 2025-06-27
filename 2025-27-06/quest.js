function checkAnswers(){
    const ans1=document.getElementById("answer").value.trim().toLowerCase();
    const ans2=document.getElementById("answer2").value.trim();

    let correct=0;

    if(ans1=="kathmandu"){
        correct++;
    }

    if(ans2=="57"){
        correct++;
    }

    alert("you got "+ correct +" out of 2.");
}