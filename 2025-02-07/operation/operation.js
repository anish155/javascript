function Operation(){
    const num1=parseInt(document.getElementById("num1").value);
    const num2=parseInt(document.getElementById("num2").value);
    const operation=document.getElementById("Operation").value;

    let result;
    if(operation==="addition"){
        result=num1+num2;
    }
    else if(operation==="subtraction"){
        result=num1-num2;
    }
    else if(operation==="multiplication"){
        result=num1*num2;
    }
    else if(operation==="division"){
        if(num2===0){
            result="cannot divide by zero";
            return;
        }
        result=num1/num2;
    }
    else{
        result="No such Operation."
    }
    document.getElementById("result").innerHTML=result;
}