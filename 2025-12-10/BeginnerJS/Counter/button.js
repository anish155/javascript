let count=0;
function Increment(){
    count++;
    document.getElementById("num-display").placeholder=count;
}

function Decrement(){
    count--;
    document.getElementById("num-display").placeholder=count;
}