function Greatest(){
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    const num3=parseInt(document.getElementById("num3").value);

    if(num1>num2 && num1>num3){
        document.getElementById("answer").innerHTML="The Greatest number is "+num1;
    }

    else if (num2>num3 && num2>num1) {
        document.getElementById("answer").innerHTML="The Greatest number is "+num2;
    } else {
        document.getElementById("answer").innerHTML="The Greatest number is "+num3;
    }
}