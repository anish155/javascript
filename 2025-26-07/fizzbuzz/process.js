function Numbers(){

    let output="";

    for (let i=0;i<=100;i++){
        if(i%3===0 && i%5===0){
            output += "FizzBuzz\n";
        }
        else if(i % 3 === 0){
            output += "Fizz\n";
        }
        else if(i % 5 === 0){
             output += "Buzz\n";
        }
        else{
            output += i + "\n";
        }
    }
    document.getElementById("result").value = output;
}