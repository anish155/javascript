function Check(){
    const num=parseInt(document.getElementById("number").value);
    if(isNaN(num)){
        alert("Enter valid number");
    }

    if(num%2==0){
        alert("the number "+num+" is an even number.");
    }
    else{
        alert("the number "+num+" is an odd number.");
    }
}