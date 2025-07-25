function Check(){
    const str=document.getElementById("answer").value.trim().toLowerCase();

    const reversed=str.split('').reverse().join('')

     if (str === reversed) {
        alert("It's a palindrome!");
    } else {
        alert("Not a palindrome.");
    }

}